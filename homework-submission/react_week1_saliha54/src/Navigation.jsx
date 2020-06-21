import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
  return (
    <NavLink to={props.link}>
      <li className="site__nav-item">{props.title}</li>
    </NavLink>
  );
};

const Navigation = props => (
  <header>
    <h1 className="site__title">{props.data.title}</h1>
    <nav className="site__nav">
      <ul>
        {props.data.navigationData.map((navigationObject, key) => (
          <NavigationItem key={key} title={navigationObject.title} link={navigationObject.link} />
        ))}
      </ul>
    </nav>
  </header>
);

export default Navigation;
