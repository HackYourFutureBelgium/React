import React, { useState, useEffect } from 'react';
import UserLogin from './UserLogin';

let Authentication = ({ children }) => {
  let [user, setUser] = useState({ token: null });

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem('userValueInLocalStorage'));
    // Change State the fist time in the site and when the users doesn't has session.
    if (login === null || login.token === null)
      localStorage.setItem('userValueInLocalStorage', JSON.stringify(user));
  }, [user]);

  let login = JSON.parse(localStorage.getItem('userValueInLocalStorage'));
  if (user.token === null && login === null)
    return <UserLogin setUser={setUser} />;
  else
    return children;
}

export default Authentication;