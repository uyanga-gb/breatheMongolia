import React, { Component } from 'react';
import {Visibility, Segment, Menu, Responsive, Container, Button, Image, Header, Grid, List} from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em', background: 'rgba(0,0,0,0.50)' }}>
        <Container>
          <Grid inverted stackable>
            <Grid.Row>
              <Grid.Column width={5}>
                <Header as='h4' inverted>
                  ©. Breathe Mongolia  2018
                </Header>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Follow Us!' />
                <List link inverted>
                  <List.Item as='a'>Lorem ipsum dolor</List.Item>
                  <List.Item as='a'>Lorem ipsum dolor</List.Item>
                  <List.Item as='a'>Lorem ipsum dolor</List.Item>
                  <List.Item as='a'>Lorem ipsum dolor</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Column Title' />
                <List link inverted>
                  <List.Item as='a'>Lorem ipsum dolor</List.Item>
                  <List.Item as='a'>Lorem ipsum dolor</List.Item>
                  <List.Item as='a'>Lorem ipsum dolor</List.Item>
                  <List.Item as='a'>Lorem ipsum dolor</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as='h4' inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
export default Footer;