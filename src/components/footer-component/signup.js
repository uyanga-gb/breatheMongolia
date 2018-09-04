
import React, { Component } from 'react';
import {Visibility, Segment, Menu, Responsive, Container, Button, Image, Header, Grid, List} from "semantic-ui-react";

class Signup extends Component {
  render() {
    return (
<Segment style={{ padding: '1em 4em', marginBottom: 0, background: 'rgba(226,226,226,1)', textAlign: 'center' }}>
  <Grid>
    <Grid.Column width={8}>
      <p style={{fontWeight: 'bold'}}>Stay Up to Date with our Newsletter!</p>
    </Grid.Column>
    <Grid.Column width={3} style={{textShadow: 'bottom'}}>
      <p style={{ fontWeight: 'bold' }}>YOUR EMAIL ADDRESS</p>
    </Grid.Column>
    <Grid.Column width={3}>
      <Button style={{ borderRadius: 24 }}>
        Subscribe
      </Button>
    </Grid.Column>
  </Grid>
</Segment>    )
  }
}
export default Signup;
