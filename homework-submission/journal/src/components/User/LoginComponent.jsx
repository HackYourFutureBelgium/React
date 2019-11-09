import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Axios from 'axios';
import { Redirect } from 'react-router';
import useForm from 'react-hook-form';
import logo from './hyf.jpg'

const LoginComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const OnSubmit = ({email, password}) => {
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
    
    if (error) alert('incorrect username or password');
  };

  return ( 
    <Container style={{ width: '28rem', height: "28rem", padding: "2rem" }}>
      {loggedIn ? <Redirect to='/' /> :
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
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input
                      type="text"
                      name="email"
                      className="form-control input_user"
                      placeholder="username"
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
                    <button type="submit" name="button" className="btn login_btn">Login</button>
                  </div>
                </form>
              </div>
        
              <div className="mt-4">
                <div className="d-flex justify-content-center links">
                  Don't have an account? <a href="/register" className="ml-2">Sign Up</a>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      }
    </Container>
  );
}
 
export default LoginComponent;