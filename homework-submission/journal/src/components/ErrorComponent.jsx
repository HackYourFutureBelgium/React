import React from 'react';
import { Container , Card } from 'react-bootstrap';
import { Icon } from 'antd';

const ErrorComponent = ({ error }) => {
  console.log(error.message)
  return ( 
    <Container>
      {error ? 
        <Card>
          <Card.Body>
            <Card.Title>
            <Icon type="warning" />
            </Card.Title>
            <Card.Text>Server Error please tray later</Card.Text>
            <Card.Link href="/">Retry</Card.Link>
          </Card.Body>
        </Card>
        : null
      }
    </Container>
  );
}

export default ErrorComponent;