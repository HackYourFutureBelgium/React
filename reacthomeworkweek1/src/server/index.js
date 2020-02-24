const todoRepository = require('./todoRepository');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.get('/api/list',  async(request, response) =>{
  const todo = await todoRepository.getTodos();
  response.status(200).send(todo);
});

app.listen(3001, function () {
    console.log('Running my server in 3001');
});
