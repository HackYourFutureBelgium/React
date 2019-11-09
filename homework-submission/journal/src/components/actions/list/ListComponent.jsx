import React from 'react'
import { List } from 'antd';

const ListComponent = ({ data }) => {
  return (
    <div>
      <h3 style={{ margin: 16 }}>Items</h3>
      <List
        bordered 
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <a href={`/${item.id}`}>{item.title}</a>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ListComponent
