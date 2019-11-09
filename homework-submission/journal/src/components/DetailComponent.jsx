import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Card } from 'antd';

const DetailComponent = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(0);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch(`http://142.93.51.96/posts/${id}`);
        const posts = await response.json();
        setDetail(posts[0]);
      } catch (e) {
        setDetail({ error: true });
      }
    };
    getDetails();
  }, []);

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title={detail.title} style={{ width: '100%' }}>
        <p>{detail.title}</p>
      </Card>
    </div>
  );
};
export default DetailComponent;
