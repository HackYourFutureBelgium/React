import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import ContentListPosts from './ContentListPosts';
import ContentAddPost from './ContentAddPost';
const { Content } = Layout;

let PageConent = () => {

  return (
    <Content style={{ padding: '50px 50px' }}>
      <Switch>
        <Route exact path="/">
          <ContentListPosts />
        </Route>
        <Route exact path="/add">
          <ContentAddPost />
        </Route>
      </Switch>
    </Content >
  );
}

export default PageConent;
