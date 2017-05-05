import React from 'react';
import { fetchSuperHeroes, fetchSuperHero } from '../actions/marvel_actions';
import { setGeolocation } from '../actions/geolocation_actions';
import { setDropdownState } from '../actions/visibility_actions';

import { connect } from 'react-redux';
import GoogleMaps from './maps';
import Autocomplete from './autocomplete';
import SuperHero from './superhero';
import TopFifteen from './top_fifteen';
const mapStateToProps = (state) => {
  return {
    geolocation: state.geolocation,
    superHeroes: state.superHeroes,
    dropdown: state.visibility.dropdown
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSuperHeroes: () => dispatch(fetchSuperHeroes()),
    fetchSuperHero: (location) => dispatch(fetchSuperHero(location)),
    setGeolocation: (geolocation) => dispatch(setGeolocation(geolocation)),
    setDropdownState: (hiddenOrNone) => dispatch(setDropdownState(hiddenOrNone))
  };
};

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.removeDropDown = this.removeDropDown.bind(this);
  }

  removeDropDown() {
    if (this.props.dropdown === "") {
      this.props.setDropdownState("hidden");
    }
  }



  render() {
    return (
      <main id="main" onClick={this.removeDropDown}>
        <div id="body">
          <SuperHero />
          <Autocomplete setGeolocation={this.props.setGeolocation} fetchSuperHero={this.props.fetchSuperHero}/>
          <GoogleMaps geolocation={this.props.geolocation} />
          <TopFifteen fetchSuperHeroes={this.props.fetchSuperHeroes}
          superHeroes={this.props.superHeroes}
          dropdown={this.props.dropdown}
          setDropdownState={this.props.setDropdownState}/>
          {/* <button onClick={() => this.props.fetchSuperHero()}>Hero</button>
          */}
        </div>
      </main>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
