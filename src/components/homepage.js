import React, { Component } from 'react'
// import { Menu, Segment, Button, Image } from 'semantic-ui-react'
// import HomepageHeading from "./education"
import PropTypes from 'prop-types'
import NavBar from "./header-component/Navbar"
import MiddleMenu from "./header-component/middle-navbar"
import Footer from "./footer-component/footer"
import Signup from "./footer-component/signup"
import imgChildren from 'assets/children.png'
import imgPregnant from 'assets/pregnant.png'
import imgElderly from 'assets/elderly.png'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  IconGroup,
  Sticky
} from 'semantic-ui-react'


const HomepageMain = ({ mobile }) => (
  <Container text verticalalign='middle'>
   <p >
     In 2016 Ulaanbaatar surpassed both New Delhi and Beijing as the capital with the highest levels of air pollution in the world
   </p>
    <Grid>
    <Grid.Row textAlign='center'>
      <Grid.Column width={5}>
        <Header as='h5' content='In Ulaanbaatar,' />
        <Grid.Row>
          <Icon disabled name='male' size='big'/>
        </Grid.Row>
        <Header as='h2' content='2 in 5' />
        <Header as='h5' content='are attributable to air pollution.' />
        Source: <a as='a'>Name of Source</a>
      </Grid.Column>
      <Grid.Column width={5}>
        <Header as='h5' content='Birth defects and miscarriage are' />
        <Header as='h2' content='3.6x' />
        <Header as='h5' content='higher in the winter.' />
        Source: <a as='a'>Name of Source</a>
      </Grid.Column>
      <Grid.Column width={5}>
        <Header as='h2' content='66.9%' />
        <Header as='h5' width={3} content='of those hospitalized due to air pollution related diseases live in underserved, ger districts.' />
        Source: <a as='a'>Name of Source</a>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    <Grid style={{background: 'rgba(0,0,0,0.50)', color: 'white'}}>
      <Grid.Column width={6}>
        <p >AIR POLLUTION FACT SHEET</p>
      </Grid.Column>
      <Grid.Column width={5}>
        <p>Download PDF
        <Icon fitted name='arrow alternate circle down outline'/>
        </p>
      </Grid.Column>
      <Grid.Column width={4}>
        <p>
          See More Statistics
          <Icon fitted name='arrow alternate circle right outline'/>
        </p>
      </Grid.Column>
    </Grid>
  </Container>
)

HomepageMain.propTypes = {
  mobile: PropTypes.bool,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <NavBar>{children}</NavBar>a
  </div>
)

export default class HomepageLayout extends Component {
  constructor(props){
    super(props)
    this.state = {}

    this.handleUpdate = contextRef => this.setState({ contextRef })
  }
  render() {
    const { calculations, contextRef, activeItem } = this.state

    return (

      <ResponsiveContainer>
        <HomepageMain/>
          <Signup/>
          <Footer/>
        </ResponsiveContainer>
    )
  }
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}
