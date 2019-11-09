import React, { useState, useEffect } from 'react';

const AuthComponent = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState[false];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  return <div>{loggedIn ? children : 'login'}</div>;
};

export default AuthComponent;
