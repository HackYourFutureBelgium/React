const database = require('./database');

// Each of this repositories contain the way to extract data from a particular entity
// It is the so-called Repository Pattern
async function  getTodos() {
    return database.query('SELECT * from todo');
};

async function insertTodo(extratodo) {
  var insertTodo = "INSERT INTO todo (activity, deadline, is_done) VALUES (?, ?, ?)";
  return database.query(insertTodo, [extratodo.name, extratodo.date, extratodo.status ? 1 : 0]);
};
async function deleteTodo(id) {
  var deleteTodo = "DELETE FROM todo WHERE id = ? ";
  return database.query(deleteTodo, [id]);
};
async function editTodo(id, data) {
  console.log(data);
  var updateTodo = "UPDATE todo SET activity = ?, deadline = ?, is_done = ? WHERE id = ? ";
  return database.query(updateTodo, [data.activity, data.deadline, data.is_done ? 1 : 0, id]);
};
module.exports = {
  getTodos,
  insertTodo,
  deleteTodo,
  editTodo
};
