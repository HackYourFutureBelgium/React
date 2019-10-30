
import React from 'react';
import { Layout } from 'antd';
import Blog from './components/Blog';
import 'antd/dist/antd.css';
import './css/App.css';

const App = () => (
  <div className="App">
    <Layout>
      <Blog />
    </Layout>
  </div>
);

export default App;
