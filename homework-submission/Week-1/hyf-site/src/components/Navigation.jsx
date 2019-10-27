import React from 'react';
import '../App.css';
import Logo from '../logo.svg'
import { Link } from 'react-router-dom'; 
import data from '../data';



function navigation(props) {
  return (
    <div className="site">
        <header>
        <img src={Logo} className="log" alt="the log"/> <br />
        <h1 className="page__title"> Hack Your Future </h1>
        <nav>
            <ul>
        {
          data.map( (i)=> (
            <li className="site__nav-item" > <Link to = {i.url}>{i.title} </Link></li>
            ))
         } 
            </ul>

        </nav>
        </header>
    </div>
  );
}

export default navigation;
