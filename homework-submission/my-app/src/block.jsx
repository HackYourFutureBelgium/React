import React from 'react';

const blockContent = [
  {
    className: 'page__blocks',
    url: '/',
  },
  {
    className: 'block',
    url: 'what',
  },
  {
    className: 'block__title',
    url: 'what',
  },
  {
    className: 'block__body',
    url: 'what',
  },
];

const NavigationItem = props => {
  return <li className="site__nav-item">{props.title}</li>;
};

const Navigation = () => (
  <header>
    <h1 className="site__title">Hack Your Future</h1>
    <nav className="site__nav">
      <ul>
        {NavigationData.map((NavigationObject, key) => (
          <NavigationItem key={key} title={NavigationObject.title} url={NavigationObject.url} />
        ))}
      </ul>
    </nav>
  </header>
);

export default Navigation;
