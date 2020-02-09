import React, {useState} from 'react';

// Exercise 1
// Since Japanese is not everyboy's forte,
// Write a component that changes the text to "Hello World" 
// Note: The initial value should be what is set in the 
// Base component

const Ex1 = function () {
    const [text, setText] = useState('Hello 世界');
    return (
        <div>
            <p>{text}</p>
            <button onClick={() => { setText() /* Fix something here */ }}>
                Translation please
            </button>
        </div>
    )
};

// Exercise 2
// Now, your japanese friend is lost.. Make it so that 
// By clicking on the button again the original text 
// is displayed again

const Ex2 = function () {
    const text = ['Hello 世界', 'Hello World'];
    const [idx, setIdx] = useState(0);
    return (
        <div>
            <p>{text[idx]}</p>
            <button onClick={() => {
                /* Write some logic here */
            }}>
                Translation please
            </button>
        </div>
    )
};


// Exercise 3
// If you click a third time, can you read the text?
// If not, make it so that if we click on the button
// it always changes the text to the other language (the text toggles)

const Ex3 = function () {
    const text = ['Hello 世界', 'Hello World', 'Dag Wereld', 'Bonjour le monde', 'Hallo Welt'];
    const [idx, setIdx] = useState(0);
    return (
        <div>
            <p>{text[idx]}</p>
            <button onClick={() => {
                /* Write some logic here */
            }}>
                Translation please
            </button>
        </div>
    )
};

// Exercise 4
// Now, update the button's text so that it indicates
// which language it will translate to
// If Japanese is displayed, the button must say "Translation to english please"
// When English is diplayed, the button must say "Translation to japanese please"
// The toggle functionality should still be there.

const Ex4 = function () {
    const lang = ['english', 'japanese'];
    const text = ['Hello 世界', 'Hello World'];
    const [idx, setIdx] = useState(0);
    return (
        <div>
            <p>{text[idx]}</p>
            <button onClick={() => {
                /* Write some logic here */
            }}>
                Translation to {/* Insert a variable here */} please
            </button>
        </div>
    )
};

// ------------------------------------

// Exercise 5
// Write a component that adds 1 to the p tag value on each click
// The p tag should start at 0

const Ex5 = function () {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button /* Add something here */>
                Click me!
            </button>
        </div>
    )
};

// Exercise 6
// Write a component that displays the next value
// in the fibonacci serie when we click on the button
// the fibonacci serie is as follows 0,1,1,2,3,5,8,13,21,...
// Got the logic?
// No? too bad...

const Ex6 = function () {
    const [fib, setFib] = useState( /* Set the initial value of the state here */);
    return (
        <div>
            <p>{/* The value you should put here is: `fib[0]`, but this will only work after you set the initial state */}</p>
            <button onClick={() => { /* Write a function to update the state */ }}>
                Click me!
            </button>
        </div>
    )
};


// Exercise 7
// Update the p tag to reflect how many times a button was clicked
// initial value should be 0

const Ex7 = function () {
    /* Init the state here */
    return (
        <div>
            <p>{/* Set a value here */}</p>
            <button /* Add something here */>
                click me
            </button>
        </div>
    )
};

// Exercise 8
// Setup
// Add to button tags to the component (3 in total)
// first button text value is "fruit"
// first button text value is "meat"
// first button text value is "vegetables"
// Goal
// Set the p tag text to: "I like ..." where ... is the text value of the button

const Ex8 = function () {
    /* init state and function to update it here */
    return (
        <div>
            <p>I like {/* Add something here */}</p>
            <button /* Add something here */>
                fruit
            </button>
            <button /* Add something here */>
                meat
            </button>
            <button /* Add something here */>
                vegetables
            </button>
        </div>
    )
};

// Exercise 9
// Setup
// Still remove one button element (keep only two)
// The first button text value is "UPPER"
// The second button text value is "LOWER"
// initial value of the p tag is 'Last click:'
// Goal
// On clicking any of the buttons
// the p tag value should indicate which one of the buttons was clicked last
// Append it to the initial 'Last click'

const Ex9 = function () {
    /* init state and function to update it here */
    return (
        <div>
            <p>Last click: {/* Add something here */}</p>
            <button /* Add something here */>
                UPPER
            </button>
            <button /* Add something here */>
                LOWER
            </button>
        </div>
    )
};


// Exercise 10
// Setup (start from the Base component)
// replace the p tag with an unordered list tag.
// add two lists elements within the unordered list. One that has "docker" as value the other "kubernetes".
// Set the text of the button element to "Add element"
// Goal
// On button click, a new list item should be appended in the unordered list. It should have as value "containerd"

const Ex10 = function () {
    const [items, setItems] = useState(['docker', 'kubernetes']);
    return (
        <div>
            <ul>
                {
                    /* render the items as an li here */
                }
            </ul>
            <button onClick={() => { /* Set the items here */  }}>
                Add element
            </button>
        </div>
    )
};

// Exercise 11
// Setup (start from the Base component)
// replace the p tag with an unordered list tag.
// Keep the unordered list empty
// Set the text of the button element to "Add element"
// Goal
// On button click, a new item is added to the unordered list.
// The value of the item is taken from the following list (keep the order!) :
// ipsizzle
// nullizzle
// sapizzle
// velizzle
// crackalackin
// maurizzle
// rhoncizzle

const Ex11 = function () {
    const default_list = ['ipsizzle', 'nullizzle', 'sapizzle', 'velizzle', 'crackalackin', 'maurizzle', 'rhoncizzle'];
    const [items, setItems] = useState([]);
    const [idx, setIdx] = useState(1);
    return (
        <div>
            <ul>
                {
                    /* render the items as an li here */
                }
            </ul>
            <button onClick={() => {
                /* update the state here */
            }}>
                Add element
            </button>
        </div>
    )
};

// Exercise 12
// Setup (start from the Base component)
// replace the p tag with an unordered list tag.
// Keep the unordered list empty
// Set the text of the button element to "Add element"
// Goal
// Same as previous exercice, but this time the list is passed as a props

const Ex12 = function ({base_list}) {
    const [items, setItems] = useState([]);
    const [idx, setIdx] = useState(1);
    return (
        <div>
            <ul>
                {
                    /* render the items as an li here */
                }
            </ul>
            <button onClick={() => {
                /* update the state here */
            }}>
                Add element
            </button>
        </div>
    )
};

// Exercise 13
// Setup (start from the Ex11 component)
// Add an extra button element with the text "Remove element"
// Goal
// On "Add element" button click, a new item is added to the unordered list.
// On "Remove element" button click, a new item is added to the unordered list.
// Use the same list as in exercice 11


const Ex13 = function () {
    const default_list = ['ipsizzle', 'nullizzle', 'sapizzle', 'velizzle', 'crackalackin', 'maurizzle', 'rhoncizzle'];
    const [items, setItems] = useState([]);
    const [idx, setIdx] = useState(1);
    return (
        <div>
            <ul>
                {
                    /* render the items as an li here */
                }
            </ul>
            <button onClick={() => {
                /* update the state here */
            }}>
                Add element
            </button>
            <button onClick={() => {
                /* update the state here */
            }}>
                Remove element
            </button>
        </div>
    )
};

// Exercise 14
// Setup
// Same as Ex13
// Goal
// Same as previous ex, but this time the list is passed as a props

const Ex14 = function ({base_list}) {
    const [items, setItems] = useState([]);
    const [idx, setIdx] = useState(1);
    return (
        <div>
            <ul>
                {
                    /* render the items as an li here */
                }
            </ul>
            <button onClick={() => {
                /* update the state here */
            }}>
                Add element
            </button>
            <button onClick={() => {
                /* update the state here */
            }}>
                Remove element
            </button>
        </div>
    )
};


export {Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10, Ex11, Ex12, Ex13, Ex14};

































