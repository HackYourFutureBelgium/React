import React, { useState, useEffect } from 'react';
import { Container, Form , Button, Row, Col} from 'react-bootstrap';
import Axios from 'axios';
import { Redirect } from 'react-router';

const LoginComponent = ({setError}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleInputEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleInputPassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    setValidated(true);

    if (validated) {
      Axios
        .post(`http://142.93.51.96/login`, { email, password })
        .then((e) => {
          //TODO : add error handling
          if (e.data) {
            localStorage.setItem('token', e.data);
            setLoggedIn(true)
          } else {
            setLoggedIn(false)
          }
        })
        .catch(err => setError(err));
    }
  };

  return ( 
    <Container style={{ width: '28rem' , height:"28rem", padding:"2rem"}}>
      {
        loggedIn ?
          <Redirect to="/" />
          :
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm="2" >Email address</Form.Label>
              <Col sm="10">
              <Form.Control
                required
                type="email" 
                placeholder="Enter email" 
                value={email}
                onChange={handleInputEmail}
                />
                <Form.Control.Feedback>looks good</Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicPassword">
              <Form.Label column sm="2">Password</Form.Label>
              <Col sm="10">
              <Form.Control
                required
                type="password" 
                placeholder="Password" 
                onChange={handleInputPassword}
                value={password}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form> 
      }
    </Container>
  );
}
 
export default LoginComponent;