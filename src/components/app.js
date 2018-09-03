import React,  { Component } from 'react'
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { browserHistory, IndexRoute } from 'react-router';
import HomePage from './homepage';
import Footer from './footer-component/footer';
import styles from '../style/styles.css';
import HomepageLayout from "./homepage"

import NavBar from "./header-component/navbar"
import MiddleNav from "./middle-nav/middle-nav";
import WhyWeCantBreathe from "./why-we-cant-breathe/why-we-cant-breathe";
import WeTriedToFightIt from "./we-tried-to-fight-it/we-tried-to-fight-it";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            {/*<NavBar />*/}
          <HomepageLayout />

          {/*<MiddleNav/>*/}
            {/*<Route exact path="/" component={HomePage} />*/}
              <Route exact path="/why" component={WhyWeCantBreathe}/>
              <Route exact path="/tried" component={WeTriedToFightIt}/>
        </div>
      </BrowserRouter>
    )
  }
}

