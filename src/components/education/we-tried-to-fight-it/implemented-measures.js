import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class ImplementedMeasures extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div>
          Traffic restriction through license plate numbers. Certain days, only cars with certain numbers can use the main roads.
        </div>
        <div>
          <h3>
            Expected Outcome
          </h3>
          <p>Reduction of emission of benzene, Nox, SO2 by 30-50%. Solving traffic problems, as the city is constantly in jams, due to poor infrastructure.</p>
          <button>What Actually Happened? </button>
        </div>
      </div>
    )
  }
}
export default ImplementedMeasures;