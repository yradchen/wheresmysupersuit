import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "New York, NY" };
    this.handleAddress = this.handleAddress.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onChange = (address) => this.setState({ address });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    // geocodeByAddress(this.state.address,  (err, latLng) => {
    //   if (err) { console.log('Oh no!', err); }
    //   console.log(`Yay! Got latitude and longitude for`, latLng);
    // });
    geocodeByAddress(this.state.address, this.handleAddress);
  }

  handleAddress(error, geolocation, address) {
    this.props.fetchSuperHero(geolocation);
    this.props.setGeolocation(geolocation);
  }

  // update(field) {
  //   return e =>
  //     this.setState({[field]: e.currentTarget.value});
  // }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    };
    return (
      <section>
        <form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete inputProps={inputProps} />
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default Autocomplete;
