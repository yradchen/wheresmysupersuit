import React from 'react';


const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
  zoom: 13
};

class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    var marker = new google.maps.Marker({
          position: {lat: 37.773972, lng: -122.431297},
          map: this.map,
          title: 'Hello World!'
        });
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
