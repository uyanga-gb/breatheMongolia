import React, { Component } from 'react'

import PropTypes from 'prop-types'
import {Visibility, Segment, Menu, Responsive, Container, Button, Image, Header} from "semantic-ui-react";
import logo from 'assets/logo.png'
import * as styles from './Navbar.less'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h2'
      content='Education'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '2.5em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1em' : '3em',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {}
    // this.handleItemClick = this.handleItemClick.bind(this)
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
            style={{ minHeight: 340, padding: '1em 0em', background: 'rgba(0,0,0,0.50)' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='' header position='left'>
                  <Image size='tiny' src={logo} />
                  Breathe Mongolia
                </Menu.Item>
                <Menu.Item as='a' active position='right'>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Our Story</Menu.Item>
                <Menu.Item as='a'>Education</Menu.Item>
                <Menu.Item as='a'>Facts</Menu.Item>
                <Menu.Item >
                  <button className={styles.buttonWhite}>
                    Get Involved
                  </button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
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






