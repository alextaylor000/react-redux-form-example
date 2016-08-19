import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, Form, actions, track } from 'react-redux-form';

class UserForm extends Component {
  render() {
    const { user, employmentHistory } = this.props;

    return (
      <div>
        <h3>User</h3>
        <Form model='user'>
          <Field model='user.firstName'>
            <label>First name:</label>
            <input type='text' />
          </Field>

          <Field model='user.lastName'>
            <label>Last name:</label>
            <input type='text' />
          </Field>

          Your name is: {user.firstName} {user.lastName}
        </Form>

        <hr />

        <h3>Employment History</h3>
        <Form model='employmentHistory'>
          <p>6 months of employment history is required.</p>
          <p><strong>Total months:</strong> {employmentHistory.totalMonths} / 6</p>
          {employmentHistory.employers.map((employer, index) => {
            return (
              <div key={index} style={{ border: '1px solid green', margin: 15, padding: 30 }}>
                <h4>Employer {index + 1}</h4>
                <Field model={track('employmentHistory.employers[].name', { id: employer.id })}>
                  <label>Employer name:</label>
                  <input type='text' />
                </Field>

                <Field model={track('employmentHistory.employers[].months', { id: employer.id})}>
                  <label>Number of months:</label>
                  <select>
                    <option value={0}></option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                  </select>
                </Field>
              </div>
            );
            }
          )}

        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    employmentHistory: state.employmentHistory
  };
}

export default connect(mapStateToProps)(UserForm);
