import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

const ListComponent = ({fetchResults}) => {
  return ( 
    <Card style={{ width: '28rem' }}>
      <ListGroup>
        {fetchResults.map((activity) => {
          if (activity.title) {
            return (
              <ListGroup.Item action href={activity.id} horizontal='sm' key={activity.id}>
              {activity.title}
              </ListGroup.Item>
            )
          }
        })}
      </ListGroup>
  </Card>
  );
}

export default ListComponent;