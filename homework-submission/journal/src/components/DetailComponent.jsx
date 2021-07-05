import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from 'antd';
import { executeGetRequests } from '../helpers/auth';
import {Card , Container} from 'react-bootstrap'

const DetailComponent = ({setError}) => {
  const { id } = useParams();
  const [fetchResults, setFetchResults] = useState(null);

  useEffect(() => {
    executeGetRequests('/posts',
      data => setFetchResults(data),
      err=>setError(err))
  }, [])

  if(!fetchResults ) return <Icon type="loading" />
  
  return (
    <Container style={{ width: '28rem' , height:"28rem", padding:"2rem"}}>
      {
        fetchResults.filter((a)=>a.id == id)
          .map((activity) => (
            <Card key={activity.id} border="success" style={{ width: '18rem', alignContent:'center' }}>
              <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                <Card.Text>{activity.content}</Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">{activity.updated_at}</small>
              </Card.Footer>
            </Card>
          ))
      }
    </Container>
  );
}

export default DetailComponent;