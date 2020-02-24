import React from 'react';
import data from './data';
import {Link} from 'react-router-dom'

  const NavigationData = [
      {
        title: ' What is Hack Your Future',
        url: '/'
      },
      {
        title: ' what We teach',
        url: '/what'
      },
      {
        title: ' Who Can Apply',
        url: '/what'
      },
  ]


const NavigationItem = props => {
  return <li className="site__nav-item"><Link to={props.url}>{props.title}</Link></li>;
};

const Navigation = (props) => (
  <header>
    <h1 className="site__title">Hack Your Future</h1>
    <nav className="site__nav">
      <ul>
        {props.data.map((NavigationObject, key) => (
          <NavigationItem key={key} title={NavigationObject.title} url={NavigationObject.url} />
        ))}
      </ul>
    </nav>
  </header>
);

export default Navigation;
