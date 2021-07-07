import React, { useState, useEffect } from 'react';
import { List } from 'antd';

const ListPost = () => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`http://142.93.51.96/posts/`);
        const posts = await response.json();
        setListItem(posts);
      } catch (e) {
        setListItem({ error: true });
      }
    };
    getPosts();
  }, []);

  return (
    <div style={{ background: '#ECECEC'}}>
      <h1 style={{ paddingTop:'70px'}}>All Posts</h1>
      <List style={{ background:'white', paddingTop:'2em', width: '50%', marginLeft: 'auto', marginRight:'auto' ,}}
        bordered
        dataSource={listItem}
        renderItem={item => (
          <List.Item>
            <a href={item.id}>{item.title}</a>
          </List.Item>
        )}
      />
    </div>
  );
};
export default ListPost;
