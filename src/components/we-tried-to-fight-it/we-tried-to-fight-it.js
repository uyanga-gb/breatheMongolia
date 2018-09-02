import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ImplementedMeasures from "./implemented-measures";

class WeTriedToFightIt extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>We Tried To Fight It.</h1>
        <h5>
          Since air pollution became a topic of concern in 2004, the GoM has taken many measures, which were unfortunately futile due to inadequate preliminary research/planning and corruption. In recent years, citizens are more actively calling out the culprits and seeking solutions.
        </h5>
        <p>We need a short paragraph so segway into the following bit of information, something like “As a country, Mongolia has implemented measures to help combat air pollution. Learn more about the expected income from some of these measures, and the actual impact it had in the Mongolian communities lorem ipsum dolor adet.</p>
        <ImplementedMeasures />
      </div>
    )
  }
}
export default WeTriedToFightIt;