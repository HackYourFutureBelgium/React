import React from 'react';
import { Container } from 'react-bootstrap';

const ErrorComponent = ({error}) => {
  return ( 
    <Container>
      {JSON.stringify(error)}
    </Container>
  );
}

export default ErrorComponent;