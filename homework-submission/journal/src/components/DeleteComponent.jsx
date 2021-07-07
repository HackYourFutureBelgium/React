import React from 'react';

const DeleteComponent = id => {
  const requestOptions = {
    method: 'DELETE',
  };

  fetch('http://142.93.51.96/posts/' + id, requestOptions)
    .then(response => {
      return response.json();
    })
    .then(result => {
      console.log(result);
    });
};

export default DeleteComponent;
