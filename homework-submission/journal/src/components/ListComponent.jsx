import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { executeGetRequest } from '../helpers/auth';

const ListComponent = ({ setError }) => {
  const [listElement, setListElement] = useState([]);

  useEffect(() => {
    executeGetRequest('/posts', data => {
      setListElement(data);
    });
    return () => {};
  });

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
