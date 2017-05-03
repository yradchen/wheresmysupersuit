import React from 'react';
import { fetchSuperHeroes } from '../actions/marvel_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSuperHeroes: () => dispatch(fetchSuperHeroes())
  };
}

const App = ({ children, fetchSuperHeroes }) => {
  return (
    <main id="main">
      <div id="body">
        <h1>Hi!</h1>
        {/* <button onClick={fetchSuperHeroes}>Heroes</button> */}
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
