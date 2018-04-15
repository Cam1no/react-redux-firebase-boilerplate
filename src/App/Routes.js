import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HelloWorld from './components/HelloWorld';

class Routes extends Component {
  render(){
    return (
      <Router>
        <Route>
          <Route exact path='/' component={HelloWorld} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
