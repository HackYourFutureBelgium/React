import React, { useState } from 'react';
import { List, Avatar } from 'antd';
import img from '../assets/developer.jpg';

const PostList = () => {
  let data = [];
  const [posts, setPosts] = useState({ loading: 0, result: null });
  if (posts.loading === 0) {
    fetch('http://142.93.51.96/posts')
      .then(response => response.json())
      .then(response => setPosts({ loading: 1, result: response }))
  }
  else {
    let { result } = posts;
    data = result;
  }
  return (
    <List style={{ backgroundColor: 'white' }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={img} />}
            title={<a href={item.id} > {item.title}</a>}
            description={item.content}
          />
        </List.Item>
      )}
    />
  )
}

export default PostList;