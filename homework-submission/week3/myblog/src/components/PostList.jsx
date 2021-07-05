import React from 'react';
import { List, Avatar } from 'antd';
import img from '../assets/developer.jpg';
import landscape from '../assets/landscape.jpg';

const PostList = ({ data }) => {
  return (
    <>
      <img src={landscape} alt='landscape' className="landscape" />
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
    </>
  )
}

export default PostList;