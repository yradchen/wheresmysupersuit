import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <Router history={ hashHistory } onUpdate={ () => window.scrollTo(0, 0) } >
      <Route path="/" component={ App } />
      </Router>
    </Provider>
  )
}

export default Root;
