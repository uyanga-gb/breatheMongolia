import React,  { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory, IndexRoute } from 'react-router';
import HomePage from './homepage';
import About from "./about";
import NavBar from './header-component/navbar';
import Footer from './footer-component/footer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Breathe Mongolia</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                  <li><a href="#">Link</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <Route name="home" exact path="/" component={HomePage} />
          <Route path="/about" component={About}/>
          <Footer/>
        </div>
      </Router>
    )
  }
}
