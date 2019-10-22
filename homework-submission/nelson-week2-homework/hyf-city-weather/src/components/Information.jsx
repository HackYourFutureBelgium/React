import React, { useState, useEffect } from 'react';
import TableInfo from './TableInfo';
import TableError from './TableError';

const Information = ({ city }) => {
  const [loadingData, setLoadingData] = useState({ loading: 0, result: null, error: 0 });

  useEffect(() => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric`;
    if (city !== '') {
      fetch(url)
        .then(res => res.json())
        .then(response => {
          let code_error = response.cod === 200 ? 0 : 1;
          setLoadingData({
            loading: 1,
            result: response,
            error: code_error
          });
        })
        .catch(error => {
          setLoadingData({
            loading: 1,
            result: error,
            error: 1
          });
        })
    }
  }, [city]);

  return (
    <div>
      {
        loadingData.loading ?
          !loadingData.error ? <TableInfo data={loadingData.result} /> : <TableError data={loadingData.result} /> : null
      }
    </div>
  );

}

export default Information;