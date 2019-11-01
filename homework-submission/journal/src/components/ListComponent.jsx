import React, { useState, useEffect } from 'react';
import { List } from 'antd';

const ListComponent = () => {
  const [listElement, setListElement] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`http://142.93.51.96/posts/`);
        const posts = await response.json();
        setListElement(posts);
        console.log(posts);
      } catch (e) {
        setListElement({ error: true });
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      <h3 style={{ margin: '16px' }}>Posts</h3>
      <List
        bordered
        dataSource={listElement}
        renderItem={item => (
          <List.Item>
            <a href={item.id}>{item.title}</a>
          </List.Item>
        )}
      />
    </div>
  );
};
export default ListComponent;
