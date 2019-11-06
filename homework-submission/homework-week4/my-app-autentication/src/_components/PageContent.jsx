import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { Layout } from 'antd';
const { Content } = Layout;

let PageConent = () => {
  return (
    <Content style={{ padding: '50px 50px' }}>
      <Switch>
        <Route exact path="/">
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>The Home</div>
        </Route>
        <Route exact path="/add">
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>This is add Post</div>
        </Route>
      </Switch>
    </Content >
  );
}

export default PageConent;
