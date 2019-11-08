import React, { useState } from 'react';
import UserLogin from './UserLogin';

let Authentication = ({ children }) => {
  let [user, setUser] = useState({ token: null });
  let login = JSON.parse(localStorage.getItem('userValueInLocalStorage'));

  if (user.token === null && (login === null || login.token === null))
    return <UserLogin setUser={setUser} />;
  else {
    if (login === null)
      localStorage.setItem('userValueInLocalStorage', JSON.stringify(user));
    return children;
  }
}

export default Authentication;