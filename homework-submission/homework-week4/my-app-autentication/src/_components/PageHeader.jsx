import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import SecureStorageHYFPost from '../_helpers/Encrypt.js'
const { Header } = Layout;

let Page_Header = () => {
  let logOut = () => {
    if (window.confirm('Do you want close your session?')) {
      SecureStorageHYFPost.clear();
      window.location.reload();
    }
  }

  return (
    <Header >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"> <Link to="/">Home</Link> </Menu.Item>
        <Menu.Item key="2"> <Link to="/add">Add</Link></Menu.Item>
        <Menu.Item key="3" onClick={logOut}> Log-out</Menu.Item>
      </Menu>
    </Header>
  );
}

export default Page_Header;
