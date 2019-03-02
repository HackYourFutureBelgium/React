# Homework Week 5

## Products table

Make a sortable, pagination-able list of books. Load the books from an external URL through the `fetch` API and display them in a nice table.

Video: <https://enigmeta.s3.amazonaws.com/hackyourfuture/hyf-react-products-table.mp4>


### Creating the app

Use `npx create-react-app products-table` to create a new app. Run the app using `cd products-table` and `npm start`.

Remove parts you don't need. Remove all content in `index.css`, remove the `App.css` file and also remove it as an import from `App.js`. Then, remove everything in the render method of `App.js` except the single container div. Add a "hello" piece of text to test. 

### Store the data

Get the [books.json](https://gist.githubusercontent.com/fdb/83e8e630b610b35dce9a3088f4832043/raw/422b669b03d3348a6c0f659b79f5d3edbf86a508/books.json) file and store it under `public/books.json`. Verify that you can access this file by going to <http://localhost:3000/books.json>. 

The data was generated using the [Mockaroo](https://mockaroo.com/) random data generator tool.

### Bootstrap

We use [Bootstrap](https://getbootstrap.com/) to get some nice default formatting for our tables. Include the Bootstrap CSS into your `public/index.html` file. 

### Fetching data

Provide a constructor to your app and a `componentDidMount` to fetch the data. You can use a relative path to the data so the code still works when hosted on a remote server. So, instead of writing `fetch('http://localhost:3000/books.json)`, write `fetch('/books.json')`.

### Rendering the data

Look at the section on [tables](https://getbootstrap.com/docs/4.3/content/tables/) to see how to format your JSX for Bootstrap tables. Each book should be rendered as a `<tr>` table row element. Make sure to add a `key` property to the row.

### Sorting the data

We're going to sort the data right before we render it, so we're not going to store the sorted data in the state; instead we're just sorting the name of the column we're going to sort on as the `sortKey`. Make sure you can click on the relevant `<th>` elements in the table header (`<thead>`). Give them an `onClick` handler that will sort by the key of that column (e.g. the "Title" header should sort by `'bookTitle'`).

JavaScript's [Array.sort method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sorts *in place*, which means it will change the array you give it. That's not what we want! We don't want to change the original `books` array. Instead, make a copy of that array using [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

The sort operation takes a function with two elements to be sorted, `a` and `b`. The function should return a value less than zero if `a` comes before `b` (ie. `a` is *smaller* than `b`). If `a` comes after `b`, the value should be greater than zero. If `a` and `b` are equal, the sort function should return `0`. For numbers, this can reduce the sort function to this short form:

`myList.sort((a, b) => a - b)`

However, for strings this doesn't work. Here we should use [String.localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare). So if `a` and `b` are strings, our sort looks like this:

`myListOfStrings.sort((a, b) => a.localeCompare(b))`

However, we have a list of book objects, so we can't just compare `a` and `b`. Instead, we need to extract out the chosen column (based on the `sortKey`) and compare *those* values. So our sort then becomes:

`Array.from(books).sort((bookA, bookB) => {
  const a = bookA[sortKey];
  const b = bookB[sortKey];
  return a.localeCompare(b);
})`

If we need to sort on numbers *and* strings, we need to check if `a` is a number or a string, first. Use `typeof` to check for this, then write an `if` condition to either use `return a - b` or `return a.localeCompare(b)`.

### Pagination

A real book app will have thousands and thousands of books. We can't render them all in one page. So we can provide pagination: split up the full list into pages of, say, 10 books at a time. To do that we're going to store the current `page` in the state. We start counting at page zero. We will use [Array.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to take our full list of *sorted* books and take a part of that list. 

`Array.slice()` takes a start and end value. The end value is not included. So if we want to show 10 items per page, the list of indices for the first page are:

`[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`

The second page is this:

`[10, 11, 12, 13, 14, 15, 16, 17, 18, 19]`

- The start index is the page index (starting at zero) multiplied by a `BOOKS_PER_PAGE` constant (set to 10).
- The end index is not included, so it's the start index + `BOOKS_PER_PAGE`. 

We show the number of the current page to the user as `{ page + 1 }` (because for the user, pages start at 1).

We provide a previous button that decreases the `state.page` value by one. Note that it should never go below 0! Use a condition to check for this.

We provide a next button that increases the `state.page` value by one. Note that it should never go below the maximum amount of pages! To check for this, check if the length of `this.state.books` array is longer than the `page * BOOKS_PER_PAGE`. Be careful for [off-by-one errors](https://en.wikipedia.org/wiki/Off-by-one_error) here. 

### Congratulate yourself

This is a tough exercise. Its aim is to reinforce concepts the basic concepts of React and to show that all we're doing is turning data into other data. Pat yourself on the back. You did it! 

## The Worst App

Making mistakes is a natural part of the process of being a developer. Being able to get yourself out of trouble is a core skill that you should develop and train. Therefore I've created an app that is deliberately crappy and full of bugs. It's your task to eradicate all the errors and bring it back into working condition.

You can watch [this video on debugging with Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript/) first if you want.

> The previous web developer in the company you worked for created this horrible web app for a sausage factory. However, he quit in frustration and now it's up to you to fix all of his mistakes. 

Source code is available here:

<https://github.com/HackYourFutureBelgium/React/tree/master/examples/the-worst>

Make a copy of this repository in your own fork, under `homework-submission/the-worst`. Then, work on fixing and improving that application. Some of the mistakes he made:

- Unneeded imports
- Bad code formatting
- No knowledge of lifecycle methods (the silly "load" button at the top)
- Buttons that don't work if you click on them
- Errors in loading the data (because he has the wrong assumption about the *shape of the data*)
- Using `var` instead of `let` or `const`
- Using `for` loops instead of `map` and `reduce`
- Horrible choice of colors and fonts :-)

Your task is to get rid of these mistakes and bring the app into working order:
- Make sure the data in the app loads automatically (by using [lifecycle methods](https://reactjs.org/docs/state-and-lifecycle.html))
- Fix the buttons so clicking "add" adds a sausage to the cart.
- Fix the checkout button so it clears the cart.

Like in class, use the `debugger` statement in the code where you want the error to be fixed. For example, in the `onLoad` method. It allows you to inspect all local variables at that point in the code.
