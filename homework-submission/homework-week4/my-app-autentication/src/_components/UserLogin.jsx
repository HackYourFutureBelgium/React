import React from 'react';
import { Layout } from 'antd';
import { Card } from 'antd';
import UserLoginForm from './UserLoginForm';
const { Content } = Layout;

let UserLogin = ({ setUser }) => {
  return (
    <Content style={{ padding: '50px 50px' }}>
      <Card title="Login" style={{ width: '40%', marginLeft: 'auto', marginRight: 'auto' }}>
        <UserLoginForm setUser={setUser} />
      </Card>
    </Content >
  );
};


export default UserLogin;
