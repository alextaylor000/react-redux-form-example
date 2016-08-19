import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, Form, actions } from 'react-redux-form';

class UserForm extends Component {
  render() {
    const { user } = this.props;

    return (
      <Form model='user'>
        <Field model='user.firstName'>
          <label>First name:</label>
          <input type='text' />
        </Field>

        <Field model='user.lastName'>
          <label>Last name:</label>
          <input type='text' />
        </Field>

        <hr />

        {user.firstName} {user.lastName}
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(UserForm);
