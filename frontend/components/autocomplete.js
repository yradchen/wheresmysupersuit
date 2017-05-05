import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.handleAddress = this.handleAddress.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onChange = (address) => this.setState({ address });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    geocodeByAddress(this.state.address, this.handleAddress);
  }

  handleAddress(error, geolocation, address) {
    // debugger
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
      placeholder: "Search Places and Nearby Marvel Heroes"
    };
    return (
      <section className="autocomplete absolute">
        <form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete inputProps={inputProps}
          />
        </form>
      </section>
    );
  }
}

export default Autocomplete;
