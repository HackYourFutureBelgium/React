import React from 'react';

const TableInfo = ({ data }) => {
  let dataTable =
    [
      { title: 'Humidity', data: data.main.humidity },
      { title: 'Tempature', data: data.main.temp },
      { title: 'Max tempature', data: data.main.temp_max },
      { title: 'Min tempature', data: data.main.temp_min },
    ]
  let urlImg = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  return (
    <table className="TFtable">
      <tbody>
        <tr><td className="title">City</td><td>{data.name} <img src={urlImg} alt='weather' /> </td></tr>
        {
          dataTable.map((dataTableRow) => (
            <tr key={dataTableRow.title}><td className="title">{dataTableRow.title}</td><td>{dataTableRow.data}</td></tr>
          ))
        }
      </tbody>
    </table >
  )
};

export default TableInfo;