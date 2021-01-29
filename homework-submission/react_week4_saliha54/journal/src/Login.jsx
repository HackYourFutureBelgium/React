import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Input, Button } from 'antd';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submitForm() {
    Axios.post('143.93.');
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        submitForm();
      }}
    ></form>
  );
};

export default LoginComponent;
