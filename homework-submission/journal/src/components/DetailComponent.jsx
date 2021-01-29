import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Card } from 'antd';
import { executeGetRequest } from '../helpers/auth';

const DetailComponent = ({ setError }) => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    executeGetRequest(`/posts/${id}`, data => {
      setDetail(data[0]);
    });
    return () => {};
  });

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title={detail.title} style={{ width: '100%' }}>
        <p>{detail.title}</p>
      </Card>
    </div>
  );
};
export default DetailComponent;
