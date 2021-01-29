import React from 'react';
import axios from 'axios';
const DeleteComponent = id => {
  axios.delete(`http://142.93.51.96/posts/${id}`, {
    headers: {
      Authorization: `Bearer:${localStorage.getItem('token')}`,
    },
  });
};

export default DeleteComponent;
