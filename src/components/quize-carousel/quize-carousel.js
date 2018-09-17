import React, { Component } from 'react';
import {Visibility, Segment, Icon, Responsive, Container, Button, Image, Header, Grid, List} from "semantic-ui-react";
import * as styles from "../header-component/Navbar.less";
import Slides from "./slides"
import TakeQuiz from "./take-quiz"
class QuizeCarousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      slides: ['start', 'astma', 'memory'],
      currentIndex: 0,
      translateValue: 0
    }

    // this.updateSlide = this.updateSlide().bind(this)
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
    return (
      <Segment style={{padding: '6em 0em'}} vertical>
        <Header as='h3' content='Learn more about how you can protect yourself' style={{padding: '2em 0em'}}>
        </Header>
        <Grid
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {/*<TakeQuiz />*/}

          {
            this.state.slides.map((slide, i) => (
              <Slides key={i} slide={slide} />
            ))
          }
          <Grid.Column>
            <Grid.Row>
              <p>1/5</p>
            </Grid.Row>
            <Grid.Row>
              <Button circular size='mini' icon='arrow right' style={{background: 'none', border: '1px solid black' }} onClick={this.nextSlide}/>
              <p>NEXT</p>
            </Grid.Row>
            <Grid.Row>
              <Button circular size='mini' icon='arrow down' style={{background: 'none', border: '1px solid black' }} onClick={this.updateSlide}/>
              <p>PREVIOUS</p>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default QuizeCarousel;