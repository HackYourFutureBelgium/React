import React, { useState, useEffect } from 'react';
import LoginComponenet from './LoginComponenet';

const AutoComponenet = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(
    () => {
      const token = localStorage.getItem('token');
      if (token) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      //check if jwt

      return () => {
        //clear
      };
    },
    [],
    // () => {},
  );
  return <div>{loggedIn ? children : <LoginComponenet />}</div>;
};

export default AutoComponenet;
