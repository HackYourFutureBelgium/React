import React from 'react';
import { Menu, Icon } from 'antd';

class MenuComponent extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <a href={`/`}>Home</a>
        </Menu.Item>
        <Menu.Item key="create">
          <a href={`create`}>Create Post</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuComponent;
