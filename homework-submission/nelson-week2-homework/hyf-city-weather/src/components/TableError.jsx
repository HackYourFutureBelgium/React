import React from 'react';

const TableError = ({ data }) => {
  let message = data.cod === '404' ? `Error Loading!, verify the name of the city.`
    : ` Error Loading!, Verify your internet conexion or contact to your administrator.`;
  return (<h1 className="message">{message}</h1>)
};

export default TableError;