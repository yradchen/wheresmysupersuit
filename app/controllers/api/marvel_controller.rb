require 'digest/md5'
# Digest::MD5.hexdigest("#{timestamp}#{privatekey}#{publickey}")
class Api::MarvelController < ApplicationController
  def show
    redis = Redis.new
    debugger
  end

  def index
    public_key = "523ab47cd7c7a5ba6df62001d5fb0451"
    base_address = "https://gateway.marvel.com:443/v1/public/characters"
    redis = Redis.new
    redis.flushall
    15.times do |number|
      ts = Time.now.to_i
      hash = Digest::MD5.hexdigest("#{ts}#{ENV["MARVEL"]}#{public_key}")
      params = {
        limit: 100,
        offset: 100 * number,
        apikey: public_key,
        ts: ts,
        hash: hash
      }
      response = RestClient.get(base_address, {params: params })
      puts number
      heroes = JSON.parse(response)
      heroes["data"]["results"].each do |hero|
        appearances = hero["comics"]["available"]
        redis.zadd("superheroes", appearances, hero["name"])
      end
    end
    top_fifteen = (redis.zrevrange("superheroes", 0, 14))
    areas = {"NYC" => [40.730610, -73.935242],
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
  areas.keys.each_with_index do |location, index|
    redis.geoadd("superheroes", areas[location][0], areas[location][1], top_fifteen[index])
  end
    render json: top_fifteen
  end
end

# start a loop that goes from 0 15

# heroes = JSON.parse(response)
# heroes["data"]["results"] == array

# array.each do |hero|
# hero["comics"]["available"] == number
# redis.zadd("superheroes", number, hero)

# make 15 queries.
# redis = Redis.new
# use redis sorted set?
# ZREVRANGE name 0 15
# redis.zadd("superheroes", 3, "jeff")
# redis.zrevrange("superheroes", 0, 14)
