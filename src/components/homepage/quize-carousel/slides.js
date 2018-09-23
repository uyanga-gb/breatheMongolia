import React, { Component } from 'react'
import * as styles from "./styles.less";
import { Image, Header, Grid, Form, Radio} from "semantic-ui-react";

class Slide extends Component {
  constructor(props){
    super(props)
    this.state = {}

    // this.updateSlide = this.updateSlide().bind(this)
  }
  handleChange = (e, { value }) => this.setState({ value })
  render() {
    return (
      <Grid className={styles.slide}>
        <Grid.Column width={8} className={styles.main_background}>
          <Header as='h3' content='Quiz 1' style={{color: 'white'}}>
          </Header>
          <p>
            Lorem ipsum dolor sit amet pretm. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
            enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis
            pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
            quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
          <Form>
            <Form.Field>
              Selected value: <b>{this.state.value}</b>
            </Form.Field>
            <Form.Field>
              <Radio
                label='Answer 1'
                name='radioGroup'
                value='Quiz 1 answer 1'
                checked={this.state.value === 'Quiz 1 answer 1'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Answer 2'
                name='radioGroup'
                value='Quiz 1 answer 2'
                checked={this.state.value === 'Quiz 1 answer 2'}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column width={8} style={{background: 'rgba(0,0,0,0.50)', color: 'white'}}>
          <Header as='h3' content='Quiz 2' style={{color: 'white'}}>
          </Header>
          <p>
            Lorem ipsum dolor sit amet pretm. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
            enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis
            pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
            quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
          <Form>
            <Form.Field>
              Selected value: <b>{this.state.value}</b>
            </Form.Field>
            <Form.Field>
              <Radio
                label='Answer 1'
                name='radioGroup'
                value='Quiz 2 answer 1'
                checked={this.state.value === 'Quiz 2 answer 1'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Answer 2'
                name='radioGroup'
                value='Quiz 2 answer 2'
                checked={this.state.value === 'Quiz 2 answer 2'}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column width={8} style={{background: 'rgba(0,0,0,0.50)', color: 'white'}}>
          <Header as='h3' content='Quiz 3' style={{color: 'white'}}>
          </Header>
          <p>
            Lorem ipsum dolor sit amet pretm. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
            enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis
            pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
            quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
          <Form>
            <Form.Field>
              Selected value: <b>{this.state.value}</b>
            </Form.Field>
            <Form.Field>
              <Radio
                label='Answer 1'
                name='radioGroup'
                value='Quiz 3 answer 1'
                checked={this.state.value === 'Quiz 3 answer 1'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Answer 2'
                name='radioGroup'
                value='Quiz 3 answer 2'
                checked={this.state.value === 'Quiz 3 answer 2'}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Slide