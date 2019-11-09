import React from 'react';
import { Card } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

let id = 0;
let data = {
  title: '1 title of the post',
  content: '1 content of the post',
};

function Details() {
  //cant get the id info with the data.
  console.log('Details Page');
  return (
    <div className="Details">
      <Card title="" extra={<a href="/">Back</a>} style={{ width: 600 }}>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </Card>
    </div>
  );
}
export default Details;
