import React from 'react';
import { Control, Title, Level, Button, Input} from 'reactbulma';
import '../App.css';

const RegisterForm = () => (
  <Level>
    <Control>
      <Title>Register</Title>
      <form>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Password" />
        <Button>Register</Button>
      </form>
    </Control>
  </Level>
);

export default RegisterForm;
