import React, { useState } from 'react';
import axios from 'axios';
import { List, Avatar } from 'antd';
import img from '../_assets/developer.jpg';
import landscape from '../_assets/landscape.jpg';

const ContentListPosts = () => {
  const [posts, setPosts] = useState({ loading: 0, result: [] });

  if (posts.loading === 0) {
    let login = JSON.parse(localStorage.getItem('userValueInLocalStorage'));
    const options = {
      headers: { 'Authorization': login.token }
    };

    axios.get('http://142.93.51.96/posts', options)
      .then(response => setPosts({ loading: 1, result: response.data }))
      .catch(error => console.log(error))
  }

  return (
    <>
      <img src={landscape} alt='landscape' className="landscape" />
      <List style={{ backgroundColor: 'white' }}
        itemLayout="horizontal"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={posts.result}
        renderItem={item => (
          <List.Item style={{ marginLeft: '5%' }}>
            <List.Item.Meta
              avatar={<Avatar src={img} />}
              title={item.title}
              description={item.content}
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default ContentListPosts;
