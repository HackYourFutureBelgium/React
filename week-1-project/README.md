# Exercises

The exercises are guided by [tests](./src/__tests__).
Each exercise has an associated test that will explain what is expected.
Some tests you require you to fix an assertion others require you to fix something in the associated `.js` file. 


## Create-react-app

If you take a look at [package.json](./package.json) you will see a dependency on `react-scripts`.
This package includes scripts and configuration used by [Create React App](https://create-react-app.dev/).
[Create React App](https://create-react-app.dev/) provides us with every tool and a prebuild configuration we need to start developing with React.
Includes but not limited to:
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- ... 

Take a lookcd  at the test in [create-react-app.test.js](./src/__tests__/create-react-app.test.js) to get started with the exercise.

## JSX

The recommended way of writing React is in JSX.    
JSX is a syntax extension to JavaScript. 
JSX may remind you of a template language, but it comes with the full power of JavaScript.

https://reactjs.org/docs/introducing-jsx.html      

Take a look at the tests in [jsx.test.js](./src/__tests__/jsx.test.js) to get started with the exercise.

## Creating React Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation

https://reactjs.org/docs/components-and-props.html

Take a look at the tests in [component.test.js](./src/__tests__/component.test.js) to get started with the exercise.

## Props

You can render a component with properties or props.

https://reactjs.org/docs/components-and-props.html

Take a look at the tests in [props.test.js](./src/__tests__/props.test.js) to get started with the exercise.

## Rendering Your App

No fun without seeing anything right ?!
Open the development server for your app with

```
yarn start
```

The server will serve the [index.html](./public/index.html). 
Including the file [index.js](./src/index.js) which loaded in by a `script` tag at the end of the body*. 

Take a look at the tests in [index.html](./public/index.html) to get started with the exercise.
The tests assert if everything in [index.js](./src/index.js) is ok.

**Test is not located inside of the __tests__ directory here**

*in reality it slightly more complicate learn more on https://create-react-app.dev/

### Shipping Your App (Some more create-react-app)

Once you have completed all the exercises run

```
yarn build
```

This will create a `build` folder in the directory.
Commit the generated files and push them to your repository to complete the exercise.

*Typically building an app is done by development server and the build directory is not part of your project*