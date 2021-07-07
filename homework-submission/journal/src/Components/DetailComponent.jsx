import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Card } from 'antd';
import axios from 'axios';

const DetailComponent = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`http://142.93.51.96/posts/${id}`)
      .then(res => setDetail(res.data))
      .catch(err => err);
  }, []);

  const itemDetails = detail.map(item => {
    return item;
  });

  return detail.map(item => {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card dataSource={itemDetails} title="Card title" bordered={false} style={{ width: 500 }}>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </Card>
      </div>
    );
  });
};
export default DetailComponent;
