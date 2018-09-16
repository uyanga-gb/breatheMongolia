import React, { Component } from 'react';
import {Visibility, Segment, Icon, Responsive, Container, Button, Image, Header, Grid, List} from "semantic-ui-react";
import * as styles from "../header-component/Navbar.less";


class Quizes extends Component {
  constructor(props){
    super(props)
    this.state = [true, false, false, false]

    // this.updateSlide = this.updateSlide().bind(this)
  }

  nextSlide = ( currentIndex ) => {
    const nextSlideIndex = currentIndex+1
    this.setState(this.state[currentIndex] = false)
    this.setState(this.state[nextSlideIndex] = true)
  }
  updateSlide = () => {
    console.log('update slide called')
    this.setState({ visible: !this.state.visible })

  }

  render() {
    return (
      <Segment style={{padding: '6em 0em'}} vertical>
        <Header as='h3' content='Learn more about how you can protect yourself' style={{padding: '2em 0em'}}>
        </Header>
        <Grid>
          <Grid.Column width={8} style={{background: 'rgba(0,0,0,0.50)', color: 'white'}}>
            <Header as='h3' content='Find out how exposed you are' style={{color: 'white'}}>
            </Header>
            <p>
              Lorem ipsum dolor sit amet pretm. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </p>
            <button className={styles.buttonWhite}>
              Take Quiz
            </button>
          </Grid.Column>
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

export default Quizes;