import React from 'react'
import { NavLink } from 'react-router-dom';
import Data from '../data/Data'


const navigationInfo = Data.navigationData;

const Navigation = ({ url, title }) => (
  <li className="site__nav-item"><NavLink exact to={url}>{title}</NavLink ></li>
);

const Header = () => (
  <header>
    <h1 className="site__title">Hack Your Future</h1>
    <nav className="site__nav">
      <ul>
        {navigationInfo.map(({ title, url }, key) => < Navigation key={key} title={title} url={url} />)}
      </ul>
    </nav>
  </header>
)

export default Header;
