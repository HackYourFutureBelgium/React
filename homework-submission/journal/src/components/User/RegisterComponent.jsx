import React, { useState } from 'react';
import { Container} from 'react-bootstrap';
import Axios from 'axios';
import {Redirect} from 'react-router'
import useForm from 'react-hook-form';
import logo from './hyf.jpg'

const RegisterComponent = () => {
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const OnSubmit = ({email,firstName, lastName,password}) => {
    console.log(email,firstName, lastName,password);
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

        if (error) alert('email already exist or incorrect form');
  };
  return (
    <Container style={{ width: '28rem', height: "28rem", padding: "2rem" }}>
      { signUp ? <Redirect to="/login" /> :
        <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src={logo}
                  className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form
                onSubmit={handleSubmit(OnSubmit)}
              >
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control input_pass"
                    placeholder="First Name"
                    ref={register({ required: true })}
                  />
                  {errors.firstName && errors.firstName.type === 'required' && (
                    <p>required</p>
                  )}
                </div>

                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control input_pass"
                    placeholder="Last Name"
                    ref={register({ required: true })}
                  />
                  {errors.lastName && errors.lastName.type === 'required' && (
                    <p>required</p>
                  )}
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    className="form-control input_user"
                    placeholder="email"
                    ref={register({
                      required: 'Required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                      }
                    })}
                  />
                  {errors.email && errors.email.message}
                </div>

                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="form-control input_pass"
                    placeholder="password"
                    ref={register({ required: true })}
                  />
                  {errors.password && errors.password.type === 'required' && (
                    <p>required</p>
                  )}
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" name="button" className="btn login_btn">Sign Up</button>
                </div>
            </form>
          </div>

            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Already have an account? <a href="/login" className="ml-2">Login</a>
              </div>
            </div>
            </div>
          </div>
        </div>
      }
    </Container>
  );
}

export default RegisterComponent;