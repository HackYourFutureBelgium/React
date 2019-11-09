import React, { useState, useEffect } from 'react';

const AuthConnect = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(
    () => {
      const cookie = Document.cookie;
      //check if jwt
      setLoggedIn(true);
      return () => {};
    },
    () => {},
  );
  return <div>{loggedIn ? children : 'login'}</div>;
};

export default AuthConnect;
