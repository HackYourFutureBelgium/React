import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import PostList from './PostList';
import PostDetail from './PostDetail';
import { Layout } from 'antd';
const { Content } = Layout;

const Body = ({ data }) => (

  <Content style={{ padding: '0 50px', marginTop: 64, }}>
    <Switch>
      <Route exact path="/">
        <PostList data={data} />
      </Route>
      <Route exact path="/:id">
        <PostDetail data={data} />
      </Route>
    </Switch>
  </Content>
);

export default Body;