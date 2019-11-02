import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Card } from 'antd';

const PostDetails = () => {
  const { id } = useParams();
  const [compenant, setCompenant] = useState(0);

  useEffect(() => {
    const getPostDetails = async () => {
      try {
        const response = await fetch(`http://142.93.51.96/posts/${id}`);
        const posts = await response.json();
        setCompenant(posts[0]);
      } catch (e) {
        setCompenant({ error: true });
      }
    };
    getPostDetails();
  }, []);

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title={compenant.title} style={{ width: '50%',marginTop:'7%', marginLeft: 'auto', marginRight:'auto' }}>
        <p>{compenant.title}</p>
      </Card>
    </div>
  );
};
export default PostDetails;
