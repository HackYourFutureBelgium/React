import React from 'react';
import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";

const { Header } = Layout;
function PageHeader (){
return(
<Header >
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
            >
                
        <Menu.Item key="1"><Link to = '/'> Home </Link></Menu.Item>
        <Menu.Item key="2"><Link to = '/create'> Create </Link></Menu.Item> 
        <Menu.Item key="3"><Link to = '/login'> Login </Link></Menu.Item>  
        <Menu.Item key="3"><Link to = '/register'> Register </Link></Menu.Item> 
          
      </Menu>

       </Header>
       );

}

export default PageHeader;
