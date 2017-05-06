require 'digest/md5'

class Api::MarvelController < ApplicationController

  def show
    lat = params["location"]["lat"]
    lng = params["location"]["lng"]
    distance = params["location"]["distance"].to_i
    if distance == 0
      distance = 125000
    end

    redis = Redis.new
    heroes = redis.georadius("superheroes_location", lng, lat, distance, "mi", "ASC")
    render json: heroes
  end

  def index
    redis = set_redis_db
    get_and_set_heroes(redis)
    top_fifteen_heroes = (redis.zrevrange("superheroes", 0, 14))
    geoadd_data(redis, top_fifteen_heroes)
    render json: top_fifteen_heroes
  end

  def update
    debugger
  end

  private

  AREAS = {
  "NYC" => [40.730610, -73.935242],
  "Boston" => [42.364506, -71.038887],
  "DC" => [38.894207, -77.035507],
  "Chicago" => [41.881832, -87.623177],
  "Indianapolis" => [39.832081, -86.145454],
  "LA" => [34.052235, -118.243683],
  "SF" => [37.733795, -122.446747],
  "Dallas" => [32.897480, -97.040443],
  "Denver" => [39.742043, -104.991531],
  "Seattle" => [47.608013, -122.335167],
  "New Orleans" => [29.951065, -90.071533],
  "Orlando" => [28.538336, -81.379234],
  "Baltimore" => [39.299236, -76.609383],
  "Minneapolis" => [44.986656, -93.258133],
  "Cleveland" => [41.505493, -81.681290]
  }

  def get_and_set_heroes(redis)
    base_address = "https://gateway.marvel.com:443/v1/public/characters"
    1.times do |number|
      ts = Time.now.to_i
      hash = Digest::MD5.hexdigest("#{ts}#{ENV["MARVEL"]}#{ENV["MARVEL_PUBLIC"]}")
      params = {
        limit: 100,
        offset: 100 * number,
        apikey: ENV["MARVEL_PUBLIC"],
        ts: ts,
        hash: hash
      }
      response = RestClient.get(base_address, {params: params })
      set_heroes(response, redis)
    end
  end

  def set_redis_db
    redis = Redis.new
    redis.flushall
    redis
  end

  def set_heroes(response, redis)
    heroes = JSON.parse(response)
    heroes["data"]["results"].each do |hero|
      appearances = hero["comics"]["available"]
      redis.zadd("superheroes", appearances, hero["name"])
    end
  end

  def geoadd_data(redis, top_fifteen_heroes)
    AREAS.keys.each_with_index do |location, index|
      lng = AREAS[location][0]
      lat = AREAS[location][1]
      hero = top_fifteen_heroes[index]
      redis.geoadd("superheroes_location", lat, lng, hero)
    end
  end
end
