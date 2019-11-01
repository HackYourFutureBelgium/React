import React, {useState, useEffect} from 'react';
import { ListGroup, Container } from 'react-bootstrap';

const ListComponent = () => {
  const [fetchResults, setFetchResults] = useState(null);

  useEffect(() => {
    fetch(`http://142.93.51.96/posts`)
      .then(response => response.json())
      .then((result) => { 
        setFetchResults(result);
      })
      .catch(err => console.log(err));
  }, []);
  if (!fetchResults) return <p>Error with the fetching</p>

  return ( 
    <Container style={{ width: '28rem' , height:"28rem"}}>
        {fetchResults.map((activity) => {
          if (activity.title) {
            return (
              <ListGroup>
                <ListGroup.Item action href={activity.id}  key={activity.id}>
                  {activity.title} 
                </ListGroup.Item>
              </ListGroup>
            )
          }
        })}
    </Container>
  );
}

export default ListComponent;