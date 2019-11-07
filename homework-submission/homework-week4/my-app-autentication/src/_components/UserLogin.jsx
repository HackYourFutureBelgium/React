import React from 'react';
import { Layout } from 'antd';
import { Card } from 'antd';
import UserLoginForm from './UserLoginForm';
import PageFooter from './PageFooter';
const { Header, Content } = Layout;

let UserLogin = ({ setUser }) => {
  return (
    <>
      <Header >
        <h1 style={{ color: ' rgb(255, 255, 255)' }}>
          Hack Your Future - Posts Page</h1>
      </ Header >
      <Content style={{ padding: '50px 50px' }}>
        <Card title="Login" style={{ width: '40%', marginLeft: 'auto', marginRight: 'auto' }}>
          <UserLoginForm setUser={setUser} />
        </Card>
      </Content >
      <PageFooter />
    </>
  );
};


export default UserLogin;
