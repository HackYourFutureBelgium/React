import React, {useState, useEffect} from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import { executeGetRequests } from '../helpers/auth';
import { Icon } from 'antd';

const ListComponent = ({setError}) => {
  const [fetchResults, setFetchResults] = useState(null);

  useEffect(() => {
    executeGetRequests('/posts',
      data => setFetchResults(data),
      err=>setError(err))
  }, [])

  if(!fetchResults ) return <Icon type="loading" />
  return ( 
    <Container style={{ width: '28rem' , height:"28rem", padding:"2rem"}}>
        {fetchResults.map((activity) => {
          if (activity.title) {
            return (
              <ListGroup key={activity.id}>
                <ListGroup.Item action href={activity.id}  >
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