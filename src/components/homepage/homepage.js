import React, { Component } from 'react'
// import { Menu, Segment, Button, Image } from 'semantic-ui-react'
// import HomepageHeading from "./education"
import PropTypes from 'prop-types'
import NavBar from "../header-component/Navbar"
import MiddleMenu from "../header-component/middle-navbar"
import Footer from "../footer-component/footer"
import Signup from "../footer-component/signup"
import imgChildren from 'assets/children.png'
import imgPregnant from 'assets/pregnant.png'
import imgElderly from 'assets/elderly.png'
import Facts from './facts/facts'
import takePledge from 'assets/man_icon.png'
import QuizeCarousel from './quize-carousel/quize-carousel'
import Pledges from './pledges/pledges'
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
