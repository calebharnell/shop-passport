import React from 'react';
import { Control, Input, Button, Title } from 'reactbulma'

const LoginForm = () => (
  <div>
    <Title>Register</Title>
    <form>
      <Control>
        <Input primary placeholder="First Name"/>
      </Control><br />
      <Control>
        <Input primary placeholder="Last Name"/>
      </Control><br />
      <Control>
        <Input primary placeholder="Email"/>
      </Control><br />
      <Control>
        <Input primary placeholder="Password"/>
      </Control><br />
      <Button primary>Submit</Button>
    </form>
  </div>
)

export default LoginForm;
