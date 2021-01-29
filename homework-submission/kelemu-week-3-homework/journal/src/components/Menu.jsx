import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

import { Menu, Icon } from 'antd';

const MainMenu = ({}) => {
  // const { Menu, Icon } = antd;
  const [state, setState] = useState({ current: 'mail' });

  const handleClick = e => {
    // console.log('click ', e);
    setState({
      current: e.key,
    });
  };
  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />
            Home
          </Link>
        </Menu.Item>

        <Menu.Item key="create">
          <Link to="/create">
            <Icon type="edit" />
            Creat New
          </Link>
        </Menu.Item>
      </Menu>
      {/* <Link to="/">Home</Link>
      <Link to="/create">Creat New</Link> */}
    </div>
  );
};

export default MainMenu;
