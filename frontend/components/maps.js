import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';

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
    this.state = { address: "New York, NY" };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onChange = (address) => this.setState({ address });
    // this.init = this.init.bind(this);
  }

  componentDidMount() {
    // const map = this.refs.map;
    // this.map = new google.maps.Map(map, _mapOptions);
    // google.maps.event.addDomListener(window, 'load', this.init);
    // var marker = new google.maps.Marker({
    //       position: {lat: 37.773972, lng: -122.431297},
    //       map: this.map,
    //       title: 'Hello World!'
    //     });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    geocodeByAddress(this.state.address,  (err, latLng) => {
      if (err) { console.log('Oh no!', err); }

      console.log(`Yay! Got latitude and longitude for`, latLng);
    });
  }
  // init() {
  //
  //   var input = this.state.search;
  //
  //   var autocomplete = new google.maps.places.Autocomplete(input);
  // }

  update(field) {
    return e =>
      this.setState({[field]: e.currentTarget.value});
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    };
    return (
      <section>
        {/* <label>Location
          <input type="text" size="50" onChange={this.update("search")}
          value={this.state.search}/>
        </label> */}
        <form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete inputProps={inputProps} />
          <button type="submit">Submit</button>
        </form>
        {/* <div id="map" ref="map">Map</div> */}
      </section>
    );
  }
}

export default GoogleMaps;
