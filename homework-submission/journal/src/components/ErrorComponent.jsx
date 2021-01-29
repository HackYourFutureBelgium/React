import React from 'react';
const ErrorComponent = error => {
  return <div>Something went wrong: {JSON.stringify(error)}</div>;
};

export default ErrorComponent;
