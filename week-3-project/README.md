# Before you start

Before starting navigate to the `week-2-project` in a terminal or cmd.
```
cd week-3-project
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
