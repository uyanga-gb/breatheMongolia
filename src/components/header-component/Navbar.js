import React, { Component } from 'react'

import PropTypes from 'prop-types'
import {Visibility, Segment, Menu, Responsive, Container, Button, Image, Header, Icon} from "semantic-ui-react";
import logo from 'assets/logo.png'
import * as styles from '../styles.less'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'home'}
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  }

  render() {
    const { activeItem } = this.state
    const { children } = this.props
    const { fixed } = this.state
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ background: 'rgba(0,0,0,0.50)' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              secondary={!fixed}
              size='large'
              pointing style={{border: 'none', height: '3em'}}
            >
              <Container>
                <Menu.Item style={{alignSelf: 'center'}}>
                  <Image size='tiny' src={logo} />
                  Breathe Mongolia
                </Menu.Item>
                <Menu.Item as={Link} to='/' position='right' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                  Home
                </Menu.Item>
                <Menu.Item as={Link} to='' name='our_story' active={activeItem === 'our_story'} onClick={this.handleItemClick}>Our Story</Menu.Item>
                <Menu.Item as={Link} to='/education' name='education' active={activeItem === 'education'} onClick={this.handleItemClick}>Education</Menu.Item>
                <Menu.Item as='a' name='facts' active={activeItem === 'facts'} onClick={this.handleItemClick}>Facts</Menu.Item>
                <Menu.Item style={{alignSelf: 'center'}}>
                  <button className={styles.buttonWhite} >
                    Get Involved
                  </button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}
NavBar.propTypes = {
  children: PropTypes.node,
}






