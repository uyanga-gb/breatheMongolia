import React from 'react';
import { Router, Route } from 'react-router';
import App from './App'

export default () => (
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
)