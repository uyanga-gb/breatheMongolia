import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    debugger
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img className="navbar-brand" src="https://goo.gl/images/LmCuGg" alt="BM Logo" />
          Breathe Mongolia
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav mr-auto">
            <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
            <li><a href="#">Our story</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Facts</a></li>
          </ul>
          <div className="navbar-ancillary-links">
            <button className="involved">Get involved</button>
          </div>

        </div>
      </nav>
      </div>
    )
  }
}
export default NavBar;