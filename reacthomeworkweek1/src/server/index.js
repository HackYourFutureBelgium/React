const todoRepository = require('./todoRepository');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.get('/api/list',  async(request, response) =>{
  const todo = await todoRepository.getTodos();
  console.log(todo);
  response.status(200).send(todo);
});

app.post('/api/list', async(request, response) => {
  const addtodo = await todoRepository.insertTodos(request.body);
  response.status(200).send(addtodo)
});

app.listen(3001, function () {
    console.log('Running my server in 3001');
});
