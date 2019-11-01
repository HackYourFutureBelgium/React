import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'antd';
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
  return ( 
    <div>
      <Router>
    <Row>
      <Col span={24}><Menu /></Col>
    </Row>
    <Row>
      <Col span={24}>
        <Switch>
          <Route path='/create' exact>
            <CreateComponent />
          </Route>
          <Route path='/:id' >
            <DetailComponent />
          </Route>
          <Route path='/' exact>
            <ListComponent />
          </Route>
        </Switch>
      </Col>
    </Row>
    <Row type="flex" justify="space-between" align="bottom">
      <Col span={24}>By Berihu Gebremedhin @2019</Col>
    </Row>
  </Router>
</div>
  );
}

export default Layout;