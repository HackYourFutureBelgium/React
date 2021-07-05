import React, { useState } from 'react';
import { Col, Row } from 'antd';
import CreateComponent from './CreateComponent';
import DetailComponent from './DetailComponent'
import ListComponent from './ListComponent';
import Menu  from './Menu';
import AuthComponent from './User/AuthComponent'
import LoginComponent from './User/LoginComponent';
import LogoutComponent from './User/LogoutComponent';
import RegisterComponent from './User/RegisterComponent';
import ErrorComponent from './ErrorComponent';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const LayoutComponent = () => {
  const [error, setError] = useState(null);

  return (
      <Router>
        <Row >
          <Col span={24}><Menu /></Col>
        </Row>
        <Row>
        {
          error ? (
            <ErrorComponent error={error}/>
          ) : (
                <Col span={24}>
                  <Switch>
                    <Route path='/login' exact>
                      <LoginComponent setError={setError} />
                    </Route>
                    <Route path='/logout' exact>
                      <LogoutComponent  />
                    </Route>
                    <Route path='/register' exact>
                    <RegisterComponent setError={setError}/>
                  </Route>
                    <AuthComponent >
                      <Route path='/create' exact>
                        <CreateComponent setError={setError} />
                      </Route>
                      <Route path='/:id' >
                        <DetailComponent setError={setError} />
                      </Route>
                      <Route path='/' exact>
                        <ListComponent setError={setError} />
                      </Route>
                    </AuthComponent>
                    <Route path='/login' exact>
                      <LoginComponent setError={setError} />
                    </Route>
                  </Switch>
                </Col>
            )
          }
          </Row>
        <Row >
          <Col span={24}>By Berihu Gebremedhin @2019</Col>
      </Row>
      </Router>
    
  );
}

export default LayoutComponent;