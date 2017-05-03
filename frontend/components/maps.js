import React from 'react';

class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, this.mapOptions());
    this.marker = new google.maps.Marker({
          position: this.props.geolocation,
          map: this.map,
          title: 'Hello World!'
        });
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.geolocation != nextProps.geolocation) {
      const geolocation = nextProps.geolocation;
      this.map.setCenter(geolocation);
      this.marker.setPosition(geolocation);
    }
  }

  mapOptions() {
    return {
      center: this.props.geolocation,
      zoom: 13
    };
  }

  render() {
    return (
      <section>
        <div id="map" ref="map">Map</div>
      </section>
    );
  }
}

export default GoogleMaps;
