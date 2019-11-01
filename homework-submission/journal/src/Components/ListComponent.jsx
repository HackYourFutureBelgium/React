import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Avatar } from 'antd';

function ListComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://142.93.51.96/posts/')
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => err);
  }, []);

  const postItems = posts.map(post => {
    return post;
  });

  return (
    <div>
      <List
        // itemLayout="horizontal"
        dataSource={postItems}
        renderItem={post => (
          <List.Item>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <a href={`/${post.id}`}>{post.title}</a>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ListComponent;
