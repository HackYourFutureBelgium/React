import axios from 'axios'

export function executeGetRequest(method, url, callBack, errorCallback, data) {
  axios({
    method,
    url: `http://142.93.51.96${url}`,
    headers: {
      Authorization: `Bearer:${localStorage.getItem('token')}`,
    },
    data
  })
    .then(response => { callBack(response.data) })
    .catch(err => { errorCallback(err) })
}

