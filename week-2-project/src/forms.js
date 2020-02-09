import React, {useState} from 'react';

import './forms.css'

// Exercise: Contact Form
// We are looking to capture user feedback, for this we add a contact from
// Write a component in which the user can submit a question
// TODO: Thank the user after completing the form

const ContactForm = () => {
    // Create the state variables and functions to update them
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [submittedText, setSubmittedText] = useState('');

    const onSubmit = (event) => {
        event.preventDefault(); // We disable the default behaviour of a form
        setSubmittedText(`Thanks for submitting ${name}`);
    };

    return (
        <section className="contact">
            { !submittedText && (
                <form onSubmit={onSubmit}>
                    <div className="field">
                        <label htmlFor="comment">Your question or comment</label> <br />
                        <textarea
                            id="comment"
                            name="comment"
                            onChange={(event) => { /* use event.target.value to set the comment */ }}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Name</label> <br />
                        <input
                            id="name"
                            type="text"
                            name="name"
                            aria-label="contact-name"
                            onChange={(event) => { /* use event.target.value to set the name */ }}
                        />
                    </div>
                    <button type="submit">Send it!</button>
                </form>
            )}
            { submittedText && (
                <p>{submittedText}</p>
            )}
        </section>
    )
};

// Exercise: Math Form
// We are making a basic calculator that count up numbers
// TODO: when a user types in a value store this value in a state variable
// TODO: Fix the issue with the number not counting up correctly

const MathForm = () => {
    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(0);

    // numberA and numberB are strings how can we force them to be numbers ?
    const sum = numberA + numberB;

    return (
        <section className="contact">
            <form>
                <div className="field">
                    <input
                        id="name"
                        type="number"
                        name="numberA"
                        aria-label="math-number-a"
                        /* add an attribute with value here that causes numberA to update when the input changes */
                    />
                    &nbsp; + &nbsp;
                    <input
                        id="name"
                        type="number"
                        name="numberA"
                        aria-label="math-number-b"
                        /* add an attribute with value here that causes numberA to update when the input changes */
                    />
                </div>
            </form>

            <p>
                The sum of a and b is {sum}
            </p>
        </section>
    );
};

// Exercise: Fruit Form
// User can submit their favourite fruit in our form
// The form however only supports banana's and apples
// TODO: Make sure users can only submit "banana" or "apple"
// TODO: if an invalid fruit (not "banana" or "apple") is typed in an error message is displayed

const FruitForm = () => {
    // Create the state variables and functions to update them
    const [fruits, setFruits] = useState([]);
    const [fruit, setFruit] = useState('');

    let error = false; /* Add an expression here that validates if fruit is a banana or apple */

    const onSubmit = (event) => {
        event.preventDefault(); // We disable the default behaviour of a form

        /* Only update the state of fruit if we have no errors */
        setFruits([...fruits, fruit]);
    };

    return (
        <section className="contact">
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="email">Banana or Apple</label> <br />
                    <input
                        id="name"
                        type="text"
                        name="name"
                        aria-label="fruit-name"
                        onChange={(event) => { setFruit(event.target.value) }}
                    />
                </div>
                {error && (
                    <p className="error">I don't recognize this fruit please make a choice between "banana" or "apple"</p>
                )}
                <button type="submit">Add</button>
            </form>
            <ul>
                {fruits.map((fruit, index) => {
                    return <li key={index}><Fruit name={fruit} /></li>
                })}
            </ul>
        </section>
    )
};

const Fruit = ({ name }) => {
    let fruitMoji;
    if (name === 'banana') {
        fruitMoji = '🍌';
    }
    else if (name === 'apple') {
        fruitMoji = '🍎'
    }

    return <span data-testid="fruit">{fruitMoji}</span>
};

export { ContactForm, MathForm, FruitForm };