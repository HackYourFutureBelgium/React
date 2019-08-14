const database = require('./database');

// Each of this repositories contain the way to extract data from a particular entity
// It is the so-called Repository Pattern

// function to asynchronously retrieve all todos
async function  getTodos() {
    return database.query('SELECT * from todo');
};

async function insertTodos(extratodo) {
  var insertTodo = "INSERT INTO todo (activity, deadline, is_done) VALUES (?, ?, ?)";
  return database.query(insertTodo, [extratodo.name, extratodo.date, extratodo.status ? 1 : 0]);
};
module.exports = {
  getTodos,
  insertTodos
};
