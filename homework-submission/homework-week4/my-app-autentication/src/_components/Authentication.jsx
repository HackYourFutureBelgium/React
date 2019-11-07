import React, { useState, useEffect } from 'react';
import UserLogin from './UserLogin';

let Authentication = ({ children }) => {
  let [user, setUser] = useState({ token: null });

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem('userValueInLocalStorage'));
    // Change State the fist time in the site and when the users doesn't have session.
    if (login === null || login.token === null)
      localStorage.setItem('userValueInLocalStorage', JSON.stringify(user));
  }, [user]);

  let login = JSON.parse(localStorage.getItem('userValueInLocalStorage'));
  if (user.token === null && (login === null || login.token === null))
    return <UserLogin setUser={setUser} />;
  else {
    console.log(user.token === null);
    console.log(login);
    return children;
  }
}

export default Authentication;