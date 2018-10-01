import React, { Component } from 'react'
import WeCantBreathe from './we-cant-breathe/we-cant-breathe'
import WhyWeCantBreathe from "./why-we-cant-breathe/why-we-cant-breathe";
import WeTriedToFightIt from "./we-tried-to-fight-it/we-tried-to-fight-it";
import * as styles from "../styles.less";
import {Link} from "react-router-dom";

import {
  Container,
  Header,
  Menu,
  Visibility
} from 'semantic-ui-react'


const EducationHeading = ({ mobile }) => (
  <Container fluid className={styles.main_background} style={{padding: '6.5em 28.5em 5em 28.5em'}}>
    <Header
      as='h2'
      content='Education'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '2.5em',
        fontWeight: 'normal',
        marginBottom: 0,
        // marginTop: mosbile ? '1em' : '3em',
      }}
    />
  </Container>
)

const EducationMain = ({ mobile }) => (
  <div ref={this.handleUpdate}>
    <WeCantBreathe/>
  </div>
)

export default class EducationLayout extends Component {
  constructor(props){
    super(props)
    this.state = { visible: false }
    this.showFixedMenu = () => this.setState({ fixed: true, visible: !this.state.visible })
    this.hideFixedMenu = () => this.setState({ fixed: false, visible: !this.state.visible })
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  }
  render() {
    const { visible, fixed } = this.state

    return (
      <div>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
          updateOn='repaint'
        >
        {
          visible ?
            <Menu
              fixed={fixed ? 'top' : null}
              pointing
              secondary
              widths={4}
              className={styles.edNav}
              style={{border: 'none', marginTop: '45px', background: 'rgba(226,226,226,1)'}}
            >
              <Menu.Item as={Link} to='' name='cant_breathe' onClick={this.handleItemClick}>
                We Can't Breathe
              </Menu.Item>
              <Menu.Item as={Link} to='' name='why_cant_breathe' onClick={this.handleItemClick}>
                Why We Can't Breathe
              </Menu.Item>
              <Menu.Item as={Link} to='' name='we_tried' onClick={this.handleItemClick}>
                We Tried to Fight It
              </Menu.Item>
              <Menu.Item as={Link} to='' name='do_something' onClick={this.handleItemClick}>
                Let's Do Something About It
              </Menu.Item>
            </Menu>
            : null
        }
        </Visibility>
        <EducationHeading />
        <EducationMain/>
        <WhyWeCantBreathe/>
        <WeTriedToFightIt/>
      </div>

    )
  }
}
