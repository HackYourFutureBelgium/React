import React from '../node_modules/react';
import PageData from './Data';

const NavigationItem = props => {
  return (
    <li className="site__nav-item">
      <a href={props.url}>{props.title}</a>
    </li>
  );
};

const Navigation = () => (
  <header>
    <h1 className="site__title">Hack Your Future</h1>
    <nav className="site__nav">
      <ul>
        {PageData.navigationData.map((navigationObject, key) => (
          <NavigationItem title={navigationObject.title} url={navigationObject.url} key={key} />
        ))}
      </ul>
    </nav>
  </header>
);

export default Navigation;
