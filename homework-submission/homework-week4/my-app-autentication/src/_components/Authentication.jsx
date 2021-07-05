import React, { useState } from 'react';
import UserLogin from './UserLogin';
import SecureStorageHYFPost from '../_helpers/Encrypt.js'

let Authentication = ({ children }) => {
  let [user, setUser] = useState({ token: null });
  let login = SecureStorageHYFPost.getItem('userValueInLocalStorage');

  if (user.token === null && (login === null || login.token === null))
    return <UserLogin setUser={setUser} />;
  else {
    if (login === null)
      SecureStorageHYFPost.setItem('userValueInLocalStorage', user);
    return children;
  }
}

export default Authentication;