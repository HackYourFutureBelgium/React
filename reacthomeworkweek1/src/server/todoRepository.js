const database = require('./database');

// Each of this repositories contain the way to extract data from a particular entity
// It is the so-called Repository Pattern

// function to asynchronously retrieve all todos
async function  getTodos() {
    return database.query('SELECT * from todo');
};


module.exports = {
  getTodos
};
