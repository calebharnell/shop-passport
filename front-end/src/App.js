import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { Button } from 'reactbulma';

class App extends Component {
  state = {
    loading: true,
    loggedIn: false
  }

  setToken = (response) => {
    this.setState({
      loggedIn: response.data.token
    })
  }

  render() {

    let loggedInState = null;
    if (!this.state.loggedIn) {
      loggedInState =
      <div>
        <LoginForm handleLogIn={this.setToken}/><br />
        <Button>Register</Button>
      </div>
    } else {
      loggedInState =
        <div>
          <p>All Products</p>
        </div>
    }

    return (
      <div className="App">
        {loggedInState}
      </div>
    );
  }
  componentDidMount = () => {
    this.setState({
      loading: false
    })
  }
}

export default App;
