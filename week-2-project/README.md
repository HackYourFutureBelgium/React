# Before you start

Before starting navigate to the `week-2-project` in a terminal or cmd.
```
cd week-2-project
```
Install dependencies
```
yarn install
```
You can run tests with 
```
yarn test
```

Each exercise is also rendered.
You can view them by starting the development server.
```
yarn start
```

# Exercises

The exercises are guided by [tests](./src/__tests__).
Each exercise has an associated test that will explain what is expected.
Some tests you require you to fix an assertion others require you to fix something in the associated `.js` file. 

## Hooks

All of the exercises will involve hooks.
They will allow us to keep state in Components. Trigger side effects when rendering and much more.

https://reactjs.org/docs/hooks-overview.html

### State hooks

> In information technology and computer science, a system is described as stateful if it is designed to remember preceding events or user interactions the remembered information is called the state of the system.
https://en.wikipedia.org/wiki/State_(computer_science)

In React we will use helpers to keep state and to mutate it.
Or we will use those helpers to perform side effects based on state changes.
These helpers are called Hooks.

https://reactjs.org/docs/hooks-state.html

Will use the `useState` throughout the exercise.

Take a look at the test in [state.test.js](./src/__tests__/state.test.js) to get started with the exercise.

Curious about how hooks internally work read
https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/

### Forms

Form are ubiquitous in building user interface.
We need to learn how to control the inner state in them and use that to validate user input, making our application interactive.

Take a look at the test in [forms.js](./src/__tests__/forms.test.js) to get started with the exercise.

### Child-Parent and Parent-Child Communication

By communication we mean the passing of state and props between Components.
Typically 1 component will take up the role of Parent and the component being rendered by the parent will be called the Child. 

https://www.pluralsight.com/guides/react-communicating-between-components

Take a look at the test in [communication.js](./src/__tests__/communication.test.js) to get started with the exercise.

### Api

An app does not live in vacuum. It communicates or gets it state from the outside world.
We will see how to render data fetched from an api.
How our interface can interact with that api.

Take a look at the test in [api.js](./src/__tests__/api.test.js) to get started with the exercise.
