import React from 'react';
import './Todo.css';

const Todo = ({ TodoArr, delTodo, done }) => {
  const todo = TodoArr.map(todo => (
    <div className="container" key={todo.id}>
      <span className={todo.done ? 'btn btn-primary' : ' btn btn-warning crossed'}>
        {' '}
        Task : {todo.description}
      </span>
      <span className="btn btn-danger " onClick={() => delTodo(todo.id)}>
        X
      </span>
      {}
      <span className="btn btn-toolbar">Deadline : {todo.deadline}</span>

      <span className="btn btn-secondary" onClick={() => done(todo.id)}>
        OK
      </span>
      <hr />
    </div>
  ));
  return (
    <div>
      {TodoArr.length ? (
        todo
      ) : (
        <h1 className="container btn-danger text-center mt-5">Nothing left</h1>
      )}
    </div>
  );
};

export default Todo;
