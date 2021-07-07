import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = props => {
  return (
    <li className="site__nav-item">
      <Link to={props.url}>{props.title} </Link>
    </li>
  );
};

const Navigation = props => (
  <header>
    <h1 className="site__title">Hack Your Future</h1>
    <nav className="site__nav">
      <ul>
        {props.data.map((dataObject, key) => (
          <NavigationItem key={key} title={dataObject.title} url={dataObject.url} />
        ))}
      </ul>
    </nav>
  </header>
);

export default Navigation;
