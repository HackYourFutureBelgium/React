import React, { useEffect, useState } from 'react';
import LoginComponent from './LoginComponent';

const AuthComponent = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  return ( 
    <div>
      {loggedIn? children : <LoginComponent />}
    </div>
  );
}

export default AuthComponent;
