import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Input, Button, Form } from 'antd';
import { Redirect } from 'react-router';

const LoginComponenet = ({ setError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedin] = useState(false);

  const submitFoorm = () => {
    Axios.post('http://142.93.51.96/login', { email, password })
      .then(e => {
        //TODo:add error handling
        if (e.data) {
          console.log(e.data);
          localStorage.setItem('token', e.data);
          setLoggedin(true);
        } else {
          setLoggedin(false);
        }
      })
      .catch(err => setError(err));
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  return (
    <div>
      {loggedIn ? (
        <Redirect to="/" />
      ) : (
        <Form
          onSubmit={e => {
            e.preventDefault();
            submitFoorm();
          }}
        >
          <Input
            type="email"
            placeholder="input email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input.Password
            placeholder="input password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button htmlType={'submit'}>Submit</Button>
        </Form>
      )}
    </div>
  );
};

export default LoginComponenet;
