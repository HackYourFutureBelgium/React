import React from 'react';
import {
  Link
} from "react-router-dom";
import { Layout, Menu, } from 'antd';
const { Header } = Layout;

const NavMenu= () => (
  <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'white' }}>
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '45px' }}
    >
      <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/CreatePost">Create Post</Link></Menu.Item>
    </Menu>
  </Header>
);

export default NavMenu;


