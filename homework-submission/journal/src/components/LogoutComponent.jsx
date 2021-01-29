import React, { useEffect } from 'react';
import { Redirect } from 'react-router';

const LogoutComponent = () => {
  useEffect(() => {
    localStorage.clear();
    return () => {};
  });

  return <Redirect to="/login" />;
};
export default LogoutComponent;
