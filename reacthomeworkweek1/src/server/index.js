const todoRepository = require('./todoRepository');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.get('/api/list',  async(request, response) =>{
  const todo = await todoRepository.getTodos();
  console.log(todo);
  todo.forEach(todo => todo.is_done = todo.is_done[0]);
  response.status(200).send(todo);
});

app.post('/api/list', async(request, response) => {
  const addtodo = await todoRepository.insertTodo(request.body);
  response.status(200).send(addtodo)
});
app.delete('/api/list/:id', async(request, response) => {
  const deletetodo = await todoRepository.deleteTodo(request.params.id);
  response.status(200).send(deletetodo)
});
app.put('/api/list/:id', async(request, response) => {
  const edittodo = await todoRepository.editTodo(request.params.id, request.body);
  response.status(200).send(edittodo)
});
app.listen(3001, function () {
    console.log('Running my server in 3001');
});
