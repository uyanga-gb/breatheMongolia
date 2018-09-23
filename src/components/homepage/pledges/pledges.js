import React, { Component } from 'react'
import { Segment, Image, Header, Icon, Checkbox, Button } from 'semantic-ui-react'
import takePledge from 'assets/man_icon.png'

export default class Pledges extends Component {
  constructor(props) {
    super(props);

    this.state = {}
    // this.handleItemClick = this.handleItemClick.bind(this)
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    this.handleChange = (e, { value }) => this.setState({ value })
  }
  render() {
    const { activeItem } = this.state
    const { children } = this.props
    return (
      <Button.Group basic widths='4' style={{textAlign: 'center', fontSize: '0.7em', margin: '7em 0em', border: 'none'}}>
        <Button name='mask' active={activeItem === 'mask'} onClick={this.handleItemClick}>
          <Image centered
                 src={takePledge}
                 size='tiny'
          />
          <Checkbox radio
                    value='mask'
                    checked={this.state.value === 'mask'}
                    onChange={this.handleChange}/>
          <Header as='h4' content='I pledge to wear a mask at lorem ipsum adet'/>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
            strong. Cum sociis natoque penatibus et magnis dis parturient mo</p>
          <p>323 people have made this pledge</p>
        </Button>
        <Button name='mask2' active={activeItem === 'mask2'} onClick={this.handleItemClick}>
          <Image centered
                 src={takePledge}
                 size='tiny'
          />
          <Checkbox radio
                    value='mask2'
                    checked={this.state.value === 'mask2'}
                    onChange={this.handleChange}/>
          <Header as='h4' content='I pledge to wear a mask at lorem ipsum adet'/>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
            strong. Cum sociis natoque penatibus et magnis dis parturient mo</p>
          <p>323 people have made this pledge</p>
        </Button>
        <Button name='mask3' active={activeItem === 'mask3'} onClick={this.handleItemClick}>
          <Image centered
                 src={takePledge}
                 size='tiny'
          />
          <Checkbox radio
                    value='mask3'
                    checked={this.state.value === 'mask3'}
                    onChange={this.handleChange}/>
          <Header as='h4' content='I pledge to wear a mask at lorem ipsum adet'/>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
            strong. Cum sociis natoque penatibus et magnis dis parturient mo</p>
          <p>323 people have made this pledge</p>
        </Button>
        <Button name='mask4' active={activeItem === 'mask4'} onClick={this.handleItemClick}>
          <Image centered
                 src={takePledge}
                 size='tiny'
          />
          <Checkbox radio
                    value='mask4'
                    checked={this.state.value === 'mask4'}
                    onChange={this.handleChange}/>
          <Header as='h4' content='I pledge to wear a mask at lorem ipsum adet'/>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
            strong. Cum sociis natoque penatibus et magnis dis parturient mo</p>
          <p>323 people have made this pledge</p>
        </Button>
      </Button.Group>
    )
  }
}
