import React from 'react';

const ErrorComponent = ({ error }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
};

export default ErrorComponent;
