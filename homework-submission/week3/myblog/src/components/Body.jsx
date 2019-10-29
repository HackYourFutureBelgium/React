import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";


import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

const Body = () => (
  <Content style={{ padding: '0 50px', marginTop: 64 }}>
    <Switch>
      <Route exact path="/">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 400 }}>Content
  <h1> Conten</h1>
        </div>
      </Route>
    </Switch>
  </Content>
);

export default Body;