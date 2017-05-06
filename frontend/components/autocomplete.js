import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { distance: "", address: "" };
    this.handleAddress = this.handleAddress.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleFormSubmit(event) {
    // needed for the way autocomplete handles onEnterKeyDown.
    if (typeof event === "object") {
      event.preventDefault();
    }
    geocodeByAddress(this.state.address, this.handleAddress);
  }

  handleAddress(error, geolocation, address) {
    geolocation.distance = this.state.distance;
    this.props.fetchSuperHero(geolocation);
    this.props.setGeolocation(geolocation);
  }

  update(field) {
    return e =>
      this.setState({[field]: e.currentTarget.value});
  }

  onChange(address) {
    this.setState({ address });
  }

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
            onEnterKeyDown={this.handleFormSubmit}
          />
          <input type="text"
                  value={this.state.distance}
                  onChange={this.update("distance")}
                  placeholder={"Distance in miles"}
                  />
          <input className="hidden" type="submit"/>
        </form>
      </section>
    );
  }
}

export default Autocomplete;
