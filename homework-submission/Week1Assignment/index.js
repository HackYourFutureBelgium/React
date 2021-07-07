const todoItems = [
  {
    id: 1,
    description: 'Get out of bed',
    deadline: '2017-09-11',
    done: true,
  },
  {
    id: 2,
    description: 'Brush teeth',
    deadline: '2017-09-10',
    done: false,
  },
  {
    id: 3,
    description: 'Eat breakfast',
    deadline: '2017-09-09',
    done: false,
  },
];

const TableHeader = () => {
  return (
    <div>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Deadline</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

const TodoItem = props => {
  const tableRow = (
    <tr>
      <td>{props.id}</td>
      <td>{props.description}</td>
      <td>{props.deadline}</td>
      <td>{props.done ? 'OK' : 'NO'}</td>
    </tr>
  );
  return (
    <table className="table table-bordered table-dark">
      <tbody>{tableRow}</tbody>
    </table>
  );
};

class TodoItemDyn extends React.Component {
  render() {
    const todoList = this.props.items.map(item => (
      // <ul>
      //   <li>{item.description}</li>
      //   <li>{item.deadline}</li>
      //   <li>{item.done ? 'OK' : 'NO'}</li>
      // </ul>
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.description}</td>
        <td>{item.deadline}</td>
        <td>{item.done ? 'OK' : 'NO'}</td>
      </tr>
    ));
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">description</th>
            <th scope="col">Deadline</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>{todoList}</tbody>
      </table>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1 className={'btn btn-secondary btn-lg btn-block'}>Static List</h1>
          <ul>
            <TableHeader />
            <TodoItem id="1" description="Get out of bed" deadline="Wed Sep 13 2017" done="true" />
            <TodoItem id="2" description="Brush Teeth" deadline="Thu Sep 14 2017" done="false" />
            <TodoItem id="3" description="Eat Breakfast" deadline="Fri Sep 15 2017" done="false" />
          </ul>
        </div>
        <div>
          <h1 className={'btn btn-primary btn-lg btn-block'}>Dynamic List</h1>
          <TodoItemDyn items={todoItems} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// class Todo extends React.Component {
//   render() {
//     const mapped = this.props.todo.map(item => (
//       <ul key={item.id}>
//         <li>{item.id}</li>
//         <li>{item.description}</li>
//         <li>{item.deadline}</li>
//         <li>{item.done ? 'OK' : 'NO'}</li>
//       </ul>
//     ));

//     console.log(mapped);
//     return <h1>{mapped}</h1>;
//   }
// }

// class App extends React.Component {
//   render() {
//     return <Todo todo={todoItems} />;
//   }
// }
