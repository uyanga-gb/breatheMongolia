import React, { Component } from 'react'

import {Container, Grid, Image, Header, Icon} from "semantic-ui-react";
import * as styles from '../../styles.less'


const Facts = ({ mobile }) => (
  <Container className={styles.facts_main}>
    <p style={{padding: '0em 6.5em'}} >
      In 2016 Ulaanbaatar surpassed both New Delhi and Beijing as the capital with the highest levels of air pollution in the world
    </p>
    <Grid  columns={3} >
      <Grid.Row>
        <Grid.Column>
          <Header as='h2' content='1.2M' />
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' content='270%' />
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' content='2 in 5' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as='h5' content='In Ulan Bator, the capital, respiratory infections have increased at a rate of' />
        </Grid.Column>
        <Grid.Column>
          <Header as='h5' content='In Ulan Bator, the capital, respiratory infections have increased at a rate of' />
        </Grid.Column>
        <Grid.Column>
          <Header as='h5' content='In Ulan Bator, the capital, respiratory infections have increased at a rate of' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{fontSize: '12px'}}>
        <Grid.Column>
          Source: <a as='a'>Name of Source</a>
        </Grid.Column>
        <Grid.Column>
          Source: <a as='a'>Name of Source</a>
        </Grid.Column>
        <Grid.Column>
          Source: <a as='a'>Name of Source</a>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid className={styles.main_background} style={{margin: '5em 5em 3em 5em', padding: '1em 0em'}}>
      <Grid.Column width={7}>
        <p >AIR POLLUTION FACT SHEET</p>
      </Grid.Column>
      <Grid.Column width={4} style={{textAlign: 'right'}}>
          Download PDF <Icon name='arrow alternate circle down outline'/>
      </Grid.Column>
      <Grid.Column width={5}>
          See More Statistics <Icon name='arrow alternate circle right outline'/>
      </Grid.Column>
    </Grid>
  </Container>
)

export default Facts