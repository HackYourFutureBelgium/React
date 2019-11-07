import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {Icon} from 'antd'

const Menu= () => {
  return ( 
    <Navbar bg="dark"  expand="xl" variant="dark">
      <Navbar.Brand href="/">Journal app</Navbar.Brand>
      <Nav className="mr-auto">
          <Nav.Link href="/">
          <Icon type="home" />
            Home
          </Nav.Link>
          <Nav.Link href="/create">
          <Icon type="plus-circle" />
            Create
          </Nav.Link>
          <Nav.Link href="/register">
            <Icon type="edit" />
            Register
          </Nav.Link>
          <Nav.Link href="/logout">
          <Icon type="logout" />
            Logout
          </Nav.Link>
      </Nav>
  </Navbar>
  );
}

export default Menu;