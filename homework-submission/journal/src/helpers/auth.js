import axios from 'axios';

export function executeGetRequests (url, callback, errorCallback = () => { }) {
  axios
    .get(`http://142.93.51.96${url}`, {
      headers: {
        Authorization: `Bearer:${localStorage.getItem('token')}`
      }
    })
    .then((result) => { 
      callback(result.data);
    })
    .catch(err => errorCallback(err));
};