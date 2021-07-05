import React from 'react';
import sad from '../static/sad.jpg';

let SiteError = ({ error }) => (
  <div className='error'>
    <h1> Ups!.. Somethig is wrong, please verify you internet conexion or call to your administrator.!</h1>
    <h2> Error: {error.message}</h2 >
    <div className='details__icon' ><img src={sad} alt='' /></div>
  </div>);

export default SiteError;