import React, { Component } from 'react'

import PropTypes from 'prop-types'
import {Visibility, Segment, Menu, Responsive, Container, Button, Image, Header, Icon} from "semantic-ui-react";
import logo from 'assets/logo.png'
import * as styles from '../styles.less'

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
                <Menu.Item as='a' position='right' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                  Home
                </Menu.Item>
                <Menu.Item as='a' name='our_story' active={activeItem === 'our_story'} onClick={this.handleItemClick}>Our Story</Menu.Item>
                <Menu.Item as='a' name='education' active={activeItem === 'education'} onClick={this.handleItemClick}>Education</Menu.Item>
                <Menu.Item as='a' name='facts' active={activeItem === 'facts'} onClick={this.handleItemClick}>Facts</Menu.Item>
                <Menu.Item style={{alignSelf: 'center'}}>
                  <button className={styles.buttonWhite} >
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






