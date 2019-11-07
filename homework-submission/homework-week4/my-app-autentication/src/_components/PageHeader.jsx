import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

let Page_Header = () => {
  return (
    <Header >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"> <Link to="/">Home</Link> </Menu.Item>
        <Menu.Item key="2"> <Link to="/add">Add</Link></Menu.Item>
      </Menu>
    </Header>
  );
}

export default Page_Header;
