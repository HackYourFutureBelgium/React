import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';

const MenuComponent = () => {
  const { SubMenu } = Menu;

  return (
    <Menu style={{ width: 256 }} mode="vertical">
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="menu" />
            <span>Menu</span>
          </span>
        }
      >
        <Menu.ItemGroup title="Options">
          <Menu.Item key="1"><a href={`/`}>Home</a></Menu.Item>
          <Menu.Item key="2"><a href={`create`}>Create</a></Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  )
}

export default MenuComponent
