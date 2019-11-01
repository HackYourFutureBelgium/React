import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

const DetailComponent = () => {
  const { id } = useParams();
  const [fetchResults, setFetchResults] = useState(null);

  useEffect(() => {
    fetch(`http://142.93.51.96/posts`)
      .then(response => response.json())
      .then((result) => { 
        setFetchResults(result);
      })
      .catch(err => console.log(err));
  }, []);
  if (!fetchResults) return <p>Error with the fetching</p>;

  return (
    <Container >
      {
        fetchResults.filter((a)=>a.id == id)
          .map((activity) => (
            <Card style={{ width: '58rem', height: "28rem" }} key={activity.uuid}>
              <Card.Body>
                <Card.Title >{activity.title}</Card.Title>
                <Card.Text >{activity.content}</Card.Text>
              </Card.Body>
            </Card>
          ))
      }
    </Container>
  );
}

export default DetailComponent;