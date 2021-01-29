import axios from "axios"

export function executeGetRequest(url, callBack, errorCallBack = () => { }) {
  axios
    .get(`http://142.93.51.96/${url}`, {
      header: {
        Authorization: `Bearer:${localStorage.getItem('token')}`,
      },
    })
    .then(res => {
      callBack(res.data)
    })
    .catch(err => errorCallBack(err));
}