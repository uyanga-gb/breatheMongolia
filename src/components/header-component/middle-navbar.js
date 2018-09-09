import React, { Component } from 'react'
import { Menu, Segment, Grid, Sticky } from 'semantic-ui-react'

export default class MiddleMenu extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    this.state = {
      calculations: {
        direction: 'none',
        height: 0,
        width: 0,
        topPassed: false,
        bottomPassed: false,
        pixelsPassed: 0,
        percentagePassed: 0,
        topVisible: false,
        bottomVisible: false,
        fits: false,
        passing: false,
        onScreen: false,
        offScreen: false,
      },
    }

    this.handleContextRef = contextRef => this.setState({ contextRef })

    this.handleUpdate = (e, { calculations }) => this.setState({ calculations })

  }


  render() {
    const { calculations, contextRef, activeItem } = this.state
    return (
      <div ref={this.handleContextRef}>
        <Sticky context={contextRef}>
          <Grid style={{textAlign:'center', background: 'rgba(226,226,226,1)'}}>
            <Grid.Row columns={4}>
              <Grid.Column name='cant_breathe' onClick={this.handleItemClick}>
                We Can't Breathe
              </Grid.Column>
              <Grid.Column onClick={this.handleItemClick}>
                Why We Can't Breathe
              </Grid.Column>
              <Grid.Column onClick={this.handleItemClick}>
                We Tried to Fight It
              </Grid.Column>
              <Grid.Column onClick={this.handleItemClick}>
                Let's Do Something About It
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Sticky>
      </div>
    )
  }
}