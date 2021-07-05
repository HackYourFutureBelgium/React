import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Info';
import Teaching from './Teaching';
import Apply from './Apply';

const navigationLinks = [
  { title: 'What is Hack Your Future?', url: '/info' },
  { title: 'What do we teach?', url: '/what' },
  { title: 'Who can apply?', url: '/who' },
];

const NavigationItem = prop => (
  <li className="site__nav-item">
    <a href={prop.url}>
      <Link to={prop.url}>{prop.title}</Link>
    </a>
  </li>
);

const Navigation = () => (
  <Router>
    <div>
      <header>
        <h1 className="site_title">Hack Your Future</h1>
        <nav className="site__nav">
          <ul>
            {navigationLinks.map((navObject, key) => (
              <NavigationItem key={key} title={navObject.title} url={navObject.url} />
            ))}
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/info">
          <Main />
        </Route>
        <Route path="/what">
          <Teaching />
        </Route>
        <Route path="/who">
          <Apply />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Navigation;
