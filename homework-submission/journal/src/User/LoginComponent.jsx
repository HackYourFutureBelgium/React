import React, { useState } from 'react';
import Axios from 'axios';
import { Input, Button, Form } from 'antd';
import { Redirect } from 'react-router';

const LoginComponent = ({ setError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const submitForm = () => {
    Axios.post('http://142.93.51.96/login', { email, password })
      .then(e => {
        if (e.data) {
          localStorage.setItem('token', e.data);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch(err => setError(err));
  };
  return (
    <div>
      {loggedIn ? (
        <Redirect to="/" />
      ) : (
        <Form
          onSubmit={e => {
            e.preventDefault();
            submitForm();
          }}
        >
          <Input
            type="email"
            placeholder="input email"
            onChange={e => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            value={email}
          />
          <Input.password
            placeholder="input password"
            onChange={e => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            value={password}
          />
          <Button htmlType={'submit'}>Submit</Button>
        </Form>
      )}
    </div>
  );
};

export default LoginComponent;