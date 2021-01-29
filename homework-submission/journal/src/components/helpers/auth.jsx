import axios from 'axios';

const executeGetRequest = (url, callback, err) => {
  axios
    .get(`http://142.93.51.96/${url}`, {
      headers: {
        Authorization: `Bearer:${localStorage.getItem('token')}`,
      },
    })
    .then(result => {
      callback(result.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export default executeGetRequest;
