import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class WhyWeCantBreathe extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>Why We Can't Breathe.</h1>
        <h5>
          Ulaanbaatar’s air pollution* is a uniquely Mongolian, multi-layered issue created from both social and environmental systematic errors, and it “remains” due to the city’s geographical location and seasonal cold which claimed it the name “coldest capital in the world”.
        </h5>
        <p>* Keep in mind that air pollution is a generalized term for a mix of hazardous pollutants both solid and gaseous such as PM2.5, PM10, NOx and many others.</p>
      </div>
    )
  }
}
export default WhyWeCantBreathe;