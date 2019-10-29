import React from 'react';
import Navigation from './Navigation';
import Body from './Body';
import BelowMessage from './BelowMessage';
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import '../css/index.css';

const Blog = () => (
  <Layout>
    <Navigation />
    <Body />
    <BelowMessage />
  </Layout>
);

export default Blog;