import React, { useState } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navigation from './Navigation';
import Body from './Body';
import BelowMessage from './BelowMessage';

const Blog = () => {
  const [posts, setPosts] = useState({ loading: 0, result: [] });
  if (posts.loading === 0) {

    fetch('http://142.93.51.96/posts')
      .then(response => response.json())
      .then(response => setPosts({ loading: 1, result: response }))
  }
  return (
    <Router>
      <Navigation />
      <Body data={posts.result} />
      <BelowMessage />
    </Router >
  )
};

export default Blog;