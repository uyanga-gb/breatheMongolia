import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

class MiddleNav extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav mr-auto">
              <li className="active"><a href="#">We Can't Breathe <span className="sr-only">(current)</span></a></li>
              <li><Link to="/why">Why We Can't Breathe</Link></li>
              <li><Link to="/tried">We Tried to Fight It</Link></li>
              <li><a href="#">Let's Do something About It</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default MiddleNav;