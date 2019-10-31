import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CreateComponent from './CreateComponent';
import DetailComponent from './DetailComponent'
import ListComponent from './ListComponent';
import Menu from './Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Layout = () => {
  const [fetchResults, setFetchResults] = useState(null);

  useEffect(() => {
    fetch(`http://142.93.51.96/posts`)
      .then(response => response.json())
      .then((result) => { 
        setFetchResults(result);
      })
      .catch(err => console.log(err));
  }, []);
  if (!fetchResults) return null;

  return ( 
    <Container>
      <Router>
        <Row>
          <Col sm><Menu /></Col>
        </Row>
        <Row>
          <Switch>
            <Route path='/create' exact>
              <CreateComponent fetchResults={fetchResults}/>
            </Route>
            <Route path='/:id' >
              <DetailComponent fetchResults={fetchResults}/>
            </Route>
            <Route path='/' exact>
              <ListComponent fetchResults={fetchResults}/>
            </Route>
          </Switch>
        </Row>
      </Router>
    </Container>
  );
}

export default Layout;