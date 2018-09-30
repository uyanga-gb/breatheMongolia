import React, { Component } from 'react'
// import { Menu, Segment, Button, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import imgElderly from 'assets/elderly.png'
import Facts from './facts/facts'
import * as styles from '../styles.less'
import takePledge from 'assets/man_icon.png'
import QuizeCarousel from './quize-carousel/quize-carousel'
import Pledges from './pledges/pledges'
import {
  Button,
  Container,
  Image, Header, Icon
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
  <Container fluid className={styles.main_background} style={{padding: '9.5em 28.5em 1em 28.5em'}}>
    <Header
      as='h2'
      content='Together we can protect our future'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '2.5em',
        fontWeight: 'normal',
        marginTop: '0em',
        marginBottom: '0em',
        paddingBottom: '0.5em'
      }}
    />
    <Header as='h5'
            inverted
            content='Once called the Land of the Eternal Blue Sky, Mongolia’s capital city, Ulaanbaatar, and province centers are facing severe air pollution. Covered by a blanket of deadly, toxic smog 9 months out of the year; 2 in 10 deaths in Ulaanbaatar are attributed to air pollution and miscarriages are not considered out of the norm. Help us change it!'
            style={{
              fontSize: mobile ? '0.5em' : '1em',
              fontWeight: 'normal',
              marginTop: '0em',
              marginBottom: '0em',
            }}
    >
  </Header>
  </Container>
)

const HomepageScrolldown = ({ mobile }) => (
  <div className={styles.main_background} style={{paddingTop: '8em', paddingBottom: '2em'}}>
    <Header as='h2'
            style={{
              fontSize: mobile ? '1.0em' : '1.5em',
              fontWeight: 'normal',
              marginBottom: '1em',
              marginTop: '0em',
              color: 'white'
            }}>
      SCROLL TO LEARN MORE
    </Header>
    <Icon name='down arrow' size='big' />
  </div>
)

HomepageScrolldown.propTypes = {
  mobile: PropTypes.bool,
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}
const HomepageMain = ({ mobile }) => (
  <Container text verticalalign='middle'>
    <Facts />
    <Image
      src={takePledge}
      as='a'
      size='tiny'
      floated='right'
      circular
    />
    <QuizeCarousel/>
    <Pledges />
  </Container>
)

HomepageMain.propTypes = {
  mobile: PropTypes.bool,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <HomepageHeading />
    <HomepageScrolldown/>
    <HomepageMain>{children}</HomepageMain>
  </div>
)

export default class HomepageLayout extends Component {
  constructor(props){
    super(props)
    this.state = {}

    this.handleUpdate = contextRef => this.setState({ contextRef })
  }
  render() {
    return (
      <ResponsiveContainer>
        <HomepageHeading />
        <HomepageScrolldown/>
        <HomepageMain/>
      </ResponsiveContainer>
    )
  }
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}
