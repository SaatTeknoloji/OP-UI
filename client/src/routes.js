// src/routes.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/about';

import UserPage from './pages/user';

import store from './store';
import { Provider } from 'react-redux';

const Routes = (props) => (
  <Provider store={store}>
    <BrowserRouter {...props}>
      <Switch>
          <Route path="/about" component={About} />
          <Route path="/users" component={UserPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Routes;