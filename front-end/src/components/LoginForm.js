import React, { Component } from 'react';
import { Control, Input, Button, Title } from 'reactbulma'
import axios from 'axios';

class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      emailValue: '',
      passwordValue: ''
    }
  }

  handleLoginChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    axios.post('/auth', {
      email: this.state.emailValue,
      password: this.state.passwordValue
    })
    .then((response) => {
      this.props.handleLogIn(response)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Title>Log In</Title>
        <form onSubmit={this.handleLoginSubmit}>
          <Control>
            <Input name='emailValue' primary onChange={this.handleLoginChange} value={this.state.emailValue} placeholder="Email"/>
          </Control><br />
          <Control>
            <Input name='passwordValue'primary onChange={this.handleLoginChange} value={this.state.passwordValue} placeholder="Password"/>
          </Control><br />
          <Button primary>Submit</Button>
        </form>
      </div>
    );
  }


}

export default LoginForm;
