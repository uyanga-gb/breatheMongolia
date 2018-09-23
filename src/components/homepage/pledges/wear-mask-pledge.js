import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { exampleFormDispatcher } from '../store';

class WearMaskPledge extends Component {
  constructor(props) {
    super(props);

    this.state = {}
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = (e, { name, value }) => this.setState( {[name]: value})

    this.handleSubmit = () => {
      const { name, email } = this.state
      this.props.exampleFormDispatcher(name, email)
    }
  }



  render () {
    const { name, email } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input placeholder="Name" name='name' value={name} onChange={this.handleChange} />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
    )
  }
}
const mapDispatchToProps = { exampleFormDispatcher }
export default class(null, mapDispatchToProps)(WearMaskPledge)