import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import PostList from './PostList';
import img from '../assets/landscape.jpg';
import { Layout } from 'antd';
const { Content } = Layout;

const Body = () => (
  <Content style={{ padding: '0 50px', marginTop: 64 }}>
    <Switch>
      <Route exact path="/">
        <img src={img} alt='landscape' className="landscape" />
        <PostList />
      </Route>
    </Switch>
  </Content>
);

export default Body;