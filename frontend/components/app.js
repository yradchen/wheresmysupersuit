import React from 'react';
import { fetchSuperHeroes, fetchSuperHero } from '../actions/marvel_actions';
import { setGeolocation } from '../actions/geolocation_actions';
import { connect } from 'react-redux';
import GoogleMaps from './maps';
import Autocomplete from './autocomplete';
import SuperHero from './superhero';
const mapStateToProps = (state) => {

  return {
    geolocation: state.geolocation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSuperHeroes: () => dispatch(fetchSuperHeroes()),
    fetchSuperHero: (location) => dispatch(fetchSuperHero(location)),
    setGeolocation: (geolocation) => dispatch(setGeolocation(geolocation))
  };
};

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <main id="main">
        <div id="body">
          <Autocomplete setGeolocation={this.props.setGeolocation} fetchSuperHero={this.props.fetchSuperHero}/>
          <GoogleMaps geolocation={this.props.geolocation} />
          <SuperHero />
          <button onClick={() => this.props.fetchSuperHero()}>Hero</button>
          <button onClick={this.props.fetchSuperHeroes}>All Heroes</button>
        </div>
      </main>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
