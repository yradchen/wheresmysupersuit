import React from 'react';
import { fetchSuperHeroes, fetchSuperHero } from '../actions/marvel_actions';
import { connect } from 'react-redux';
import GoogleMaps from './maps';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSuperHeroes: () => dispatch(fetchSuperHeroes()),
    fetchSuperHero: (location) => dispatch(fetchSuperHero(location))
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
          <h1>Hi!</h1>
          <GoogleMaps/>
          <button onClick={() => this.props.fetchSuperHero()}>Hero</button>
          {/* <button onClick={fetchSuperHeroes}>Heroes</button> */}
        </div>
      </main>
    );
  }
}
// const App = ({ children, fetchSuperHeroes, fetchSuperHero }) => {
//   return (
//     <main id="main">
//       <div id="body">
//         <h1>Hi!</h1>
//         <button onClick={fetchSuperHero}>Hero</button>
//         {/* <button onClick={fetchSuperHeroes}>Heroes</button> */}
//       </div>
//     </main>
//   );
// };

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
