import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const MenuComponent = () => {
  const { SubMenu } = Menu;

  return (
    <Menu mode="horizontal">
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="appstore" />
            MENU
          </span>
        }
      >
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="create">
          <Link to="/create">Create</Link>
        </Menu.Item>
        <Menu.Item key="register">
          <Link to="/register">Create</Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <Link to="/create">Log Out</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default MenuComponent;
