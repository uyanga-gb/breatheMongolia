import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Container, Grid, Segment, Header, Image, Icon, Divider, Row } from 'semantic-ui-react'
import * as styles from "../../styles.less";

const WhyWeCantBreatheHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Why We Can’t Breathe.'
      style={{
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: mobile ? '0.5em' : '2em',
        color: '#000000',
        textAlign: 'center'
      }}
    />
  </Container>
)

WhyWeCantBreatheHeading.propTypes = {
  mobile: PropTypes.bool,
}

class WhyWeCantBreathe extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <WhyWeCantBreatheHeading />
        <Segment vertical>
          <p className={styles.paddedContainer}>
            Ulaanbaatar’s air pollution* is a uniquely Mongolian, multi-layered issue created from both social and environmental systematic errors, and it “remains” due to the city’s geographical location and seasonal cold which claimed it the name “coldest capital in the world”.
          </p>
        </Segment>
        {/*<p>* Keep in mind that air pollution is a generalized term for a mix of hazardous pollutants both solid and gaseous such as PM2.5, PM10, NOx and many others.</p>*/}
      </div>
    )
  }
}
export default WhyWeCantBreathe;