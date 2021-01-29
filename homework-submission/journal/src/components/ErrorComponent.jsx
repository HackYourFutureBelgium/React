import React from 'react';

const ErrorComponent = ({ error }) => {
  return (
    <div>
      <h1>Something went wrong.</h1>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
};

export default ErrorComponent;
