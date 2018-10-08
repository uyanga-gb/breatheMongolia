import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ImplementedMeasures from "./implemented-measures";
import { Container, Grid, Segment, Header, Image, Icon, Divider, Row } from 'semantic-ui-react'
import * as styles from "../../styles.less";


const WeTriedToFightHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='We tried to fight it.'
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

class WeTriedToFightIt extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <WeTriedToFightHeading/>
        <Segment vertical basic>
          <p className={styles.paddedContainer}>
            Since air pollution became a topic of concern in 2004, the GoM has taken many measures, which were unfortunately futile due to inadequate preliminary research/planning and corruption. In recent years, citizens are more actively calling out the culprits and seeking solutions.
          </p>
          <p className={styles.paddedContainer}>We need a short paragraph so segway into the following bit of information, something like “As a country, Mongolia has implemented measures to help combat air pollution. Learn more about the expected income from some of these measures, and the actual impact it had in the Mongolian communities lorem ipsum dolor adet.</p>
        </Segment>
        <ImplementedMeasures />
      </div>
    )
  }
}
export default WeTriedToFightIt;