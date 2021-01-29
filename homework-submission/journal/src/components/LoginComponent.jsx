import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button } from 'antd';
import { Redirect } from 'react-router';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  function submitForm() {
    axios
      .post('http://142.93.51.96/login', { email, password })
      .then(e => {
        if (e.data) {
          localStorage.setItem('token', e.data);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = p => {
    setPassword(p.target.value);
  };
  return (
    <div>
      {loggedIn ? (
        <Redirect to="/" />
      ) : (
        <form
          onSubmit={e => {
            e.preventDefault();
            submitForm();
          }}
        >
          <Input placeholder="input email" onChange={handleEmailChange} value={email} />
          <Input.Password
            placeholder="input password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Button htmlType={'submit'}>Submit</Button>
        </form>
      )}
    </div>
  );
};
export default LoginComponent;
