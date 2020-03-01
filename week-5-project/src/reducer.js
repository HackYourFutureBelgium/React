import React, {useReducer} from 'react';

// Reducer 1: reduces the decrement action
// TODO: implement the 'decrement action'

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1
            };
        // Add a case for decrement here
    }
}

const Reducer1 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: <span data-testid="total">{state.count}</span>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    )
};

// Reducer 2: adding a reset
// TODO: add a reset action

function reducer2(state, action) {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1
            };
        // Add a case for decrement here
    }
}

const Reducer2 = () => {
    const [state, dispatch] = useReducer(reducer2, initialState);
    return (
        <>
            Count: <span data-testid="total">{state.count}</span>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            {/* dispatch an on click of this button */}
            <button>reset</button>
        </>
    )
};

const initialTodos = [
    {
        id: 'a',
        task: 'Learn Html',
        complete: false,
    },
    {
        id: 'b',
        task: 'Learn React',
        complete: false,
    },
];

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'DO_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: true };
                } else {
                    return todo;
                }
            });
        case 'UNDO_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: false };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

// Exercise 3: dispatcher
// TODO: trigger dispatch with the correct arguments
const Reducer3 = () => {

    const [todos, dispatch] = useReducer(
        todoReducer,
        initialTodos
    );

    const handleChange = todo => {
        // TODO: Implement a dispatch so the reducer works without any changes
    };

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <label>
                        <input
                            data-testid={`todo${todo.id}`}
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => { handleChange(todo) }}
                        />
                        {todo.task}
                    </label>
                </li>
            ))}
        </ul>
    );
};


export { Reducer1, Reducer2, Reducer3 };