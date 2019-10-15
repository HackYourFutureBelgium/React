import React from 'react'
import Data from '../data/Data'
import Content from './Content';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
const navigationInfo = Data.navigationData;
const contentInfo = Data.contentData;

const Navigation = ({ url, title }) => (
  <li className="site__nav-item"><NavLink exact to={url}>{title}</NavLink ></li>
);

const Header = () => (
  <header>
    <h1 className="site__title">Hack Your Future</h1>
    <nav className="site__nav">
      <ul>
        {navigationInfo.map(({ title, url }, key) => (< Navigation key={key} title={title} url={url} />))}
      </ul>
    </nav>
  </header>
)
const Main = () => (
  <Switch>
    {
      navigationInfo.map((pageRouteInfo, index) => (
        < Route exact path={pageRouteInfo.url} key={index}>
          <Content info={contentInfo[index]} title={pageRouteInfo.title} />
        </Route>
      ))
    }
  </Switch>
)

const Page = () => (
  <Router>
    <div className="site">
      <Header />
      <Main />
    </div >
  </Router>
);

export default Page;

