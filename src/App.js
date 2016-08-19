import React, { Component } from 'react';
import  { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store';
import UserForm from './components/UserForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UserForm />
      </Provider>
    );
  }
}

export default App;
