import React, { useState } from 'react';
import { Card } from 'antd';
import ContentAddPostForm from './ContentAddPostForm';
import ContentShowPost from './ContentShowPost';

const ContentAddPost = () => {
  const [newPosts, setNewPosts] = useState(null);
  return (
    <Card title="Add Post" style={{ width: '40%', marginLeft: 'auto', marginRight: 'auto' }}>
      {
        newPosts === null ?
          < ContentAddPostForm setNewPosts={setNewPosts} /> :
          < ContentShowPost newPosts={newPosts} />
      }
    </Card>
  )
}

export default ContentAddPost;

