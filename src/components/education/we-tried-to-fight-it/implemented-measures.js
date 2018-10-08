import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Segment, Grid, Image, List, Header, Button} from "semantic-ui-react";
import * as styles from "../../styles.less";


class ImplementedMeasures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: ['stove_standard', 'effective_fuels', 'housing_projects', 'migration_ban', 'traffic_restriction'],
      currentIndex: 0,
      translateValue: 0
    }

  }

  nextSlide = ()  => {
    console.log('curentIndex ', this.state.currentIndex)
    if(this.state.currentIndex === this.state.slides.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(350)
    }));
  }

  updateSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + (350)

    }));
  }

  render() {
    const { activeItem } = this.state.currentIndex
    return (
      <Segment vertical style={{padding: '1em 8em'}}>
        <Grid >
          <Grid.Column width={3}>
            <List link>
              <List.Item active>Stove Standards</List.Item>
              <List.Item as='a'>Effective Fuels</List.Item>
              <List.Item as='a'>Housing Projects</List.Item>
              <List.Item as='a'>Rural Migration Ban</List.Item>
              <List.Item as='a'>Traffic Restriction</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={13}>
            <Grid.Row active={activeItem === 0}>
              <Grid.Column width={6} className={styles.implementLeftSlide} >
                <Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <Header as='h3' content='Distributed a total of 170,000 stoves (2010 - 40M USD)' />
              </Grid.Column>
              <Grid.Column width={6} className={styles.implementRightSlide} >
                <Header as='h3' inverted content='Expected Outcome'/>
                <p>1. Reduction of ger household emissions by 70-89% (depending on the specific insulation, and the correct use of the stoves, 30-89%)</p>
                <p>2. Reduce coal consumption by 11-26%</p>
                <button style={{float: 'right', marginTop: '5em'}} className={styles.buttonWhite}>What Actually Happened?</button>
              </Grid.Column>
            </Grid.Row>
              <Grid.Row active={activeItem === 1}>
                <Grid.Column width={6} className={styles.implementLeftSlide} >
                  <Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                  <Header as='h3' content='Traffic restriction through license plate numbers. Certain days, only cars with certain numbers can use the main roads.' />
                </Grid.Column>
                <Grid.Column width={6} className={styles.implementRightSlide} >
                  <Header as='h3' inverted content='Expected Outcome'/>
                  <p>Reduction of emission of benzene, Nox, SO2 by 30-50%. Solving traffic problems, as the city is constantly in jams, due to poor infrastructure.</p>
                  <p>2. jhghibnmbnlmkvvbknjmlnbhvhbjn</p>
                  <button style={{float: 'right', marginTop: '5em'}} className={styles.buttonWhite}>What Actually Happened?</button>
                </Grid.Column>
              </Grid.Row>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}
export default ImplementedMeasures;