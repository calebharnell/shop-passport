import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { Button } from 'reactbulma';

class App extends Component {
  state = {
    loading: true,
    loggedIn: false,
    registered: true
  }

  setToken = (response) => {
    this.setState({
      loggedIn: response.data.token
    })
  }

  showRegister = () => {
    let registeredToggle = !this.state.registered
    this.setState(prevState => ({
      registered: registeredToggle
    }))
  }

  render() {

    let loggedInState = null;
    if (!this.state.loggedIn && this.state.registered) {
      loggedInState =
      <div>
        <LoginForm handleLogIn={this.setToken}/><br />
        <Button onClick={this.showRegister}>Register</Button>
      </div>
    } else if (!this.state.loggedIn && !this.state.registered) {
      loggedInState =
      <div>
        <RegisterForm /><br />
        <Button onClick={this.showRegister}>Log In</Button>
      </div>
    }else {
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
