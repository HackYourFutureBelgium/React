import React, { useState } from 'react';
import { Container, Form, Button, Col,Row } from 'react-bootstrap';
import Axios from 'axios';
import {Redirect} from 'react-router'

const RegisterComponent = ({setError}) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword]=useState(null)
  const [signUp, setSignUp] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleInputPassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleInputEmail= (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleInputFirstName = (event) => {
    event.preventDefault();
    setFirstName(event.target.value);
  };

  const handleInputLastName = (event) => {
    event.preventDefault();
    setLastName(event.target.value);
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
        .post(`http://142.93.51.96/register`, { email, firstName, lastName,password })
        .then((e) => {
          console.log(e)
          //TODO : add error handling
          if (e.data) {
            localStorage.setItem('token', e.data);
            setSignUp(true)
          } else {
            setSignUp(false)
          }
        })
        .catch(err => setError(err));
    }
  };
  return (
    <Container style={{ width: '28rem' , height:"28rem", padding:"2rem"}}>
      {
        signUp ?
          <Redirect to="/login" />
          :
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm="2">Email address</Form.Label>
              <Col sm="10">
              <Form.Control
                required
                type="email" 
                placeholder="dani@gmail.com" 
                value={email}
                onChange={handleInputEmail}
                />
                <Form.Control.Feedback>looks good</Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicFirstName">
              <Form.Label column sm="2">FirstName</Form.Label>
              <Col sm="10">
              <Form.Control
                required
                type="text" 
                placeholder="dani" 
                onChange={handleInputFirstName}
                value={firstName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group  as={Row} controlId="formBasicLastName">
              <Form.Label column sm="2">
                LastName
              </Form.Label>
              <Col sm="10">
              <Form.Control
                required
                type="text" 
                placeholder="gebre" 
                onChange={handleInputLastName}
                value={lastName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
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
              Sign Up
            </Button>
          </Form> 
      }
    </Container>

  );
}
 
export default RegisterComponent;