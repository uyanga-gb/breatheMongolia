import React, { Component } from 'react'

import PropTypes from 'prop-types'
import {Visibility, Segment, Menu, Responsive, Container, Button, Image, Header, Icon} from "semantic-ui-react";
import logo from 'assets/logo.png'
import * as styles from './Navbar.less'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h2'
      content='Homepage title'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '2.5em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1em' : '2em',
      }}
    />
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.rttitor eu, consequat vitae, eleifend ac, enim.
    </p>
  </Container>
)

const HomepageScrolldown = ({ mobile }) => (
  <div>
    <Header as='h2'
      style={{
        fontSize: mobile ? '1.0em' : '1.5em',
        fontWeight: 'normal',
        marginBottom: '1em',
        marginTop: mobile ? '1em' : '3em',
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
            <HomepageScrolldown/>
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






