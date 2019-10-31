import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const DetailComponent = ({fetchResults}) => {
  const { id } = useParams();
  return (
    <Card style={{ width: '28rem' }}>
      {
        fetchResults.filter((a)=>a.id == id)
          .map((activity) => (
            <div>
              <h1>{activity.title}</h1>
              <p>{activity.content}</p>
            </div>
          ))
      }
    </Card>
  );
}

export default DetailComponent;