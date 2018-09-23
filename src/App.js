import React,  { Component } from 'react'
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { browserHistory, IndexRoute } from 'react-router';
import HomePage from './components/homepage/homepage';
import Footer from './components/footer-component/footer';
import Signup from './components/footer-component/signup';
import HomepageLayout from "./components/homepage/homepage"

import NavBar from "./components/header-component/Navbar"
import WhyWeCantBreathe from "./components/education/why-we-cant-breathe/why-we-cant-breathe";
import WeTriedToFightIt from "./components/education/we-tried-to-fight-it/we-tried-to-fight-it";

import 'styling/semantic.less'
import Education from "./components/education/education";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <NavBar />

        <Switch>
          {/*<HomepageLayout />*/}

            <Route exact path="/" component={HomepageLayout} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/why" component={WhyWeCantBreathe}/>
            <Route exact path="/tried" component={WeTriedToFightIt}/>
        </Switch>
          <Signup/>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

