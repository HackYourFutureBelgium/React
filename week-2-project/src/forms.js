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
        event.preventDefault();
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
                            onChange={(event) => { setComment(event.target.value) }}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Name</label> <br />
                        <input
                            id="name"
                            type="text"
                            name="name"
                            aria-label="contact-name"
                            onChange={(event) => { setName(event.target.value)}}
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

const MathForm = () => {
    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(0);

    const sum = parseInt(numberA) + parseInt(numberB);

    return (
        <section className="contact">
            <form>
                <div className="field">
                    <input
                        id="name"
                        type="number"
                        name="numberA"
                        aria-label="math-number-a"
                        onChange={(event) => { setNumberA(event.target.value) }} 
                    />
                    &nbsp; + &nbsp;
                    <input
                        id="name"
                        type="number"
                        name="numberA"
                        aria-label="math-number-b"
                        onChange={(event) => { setNumberB(event.target.value) }} 
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

    let error = (fruit === 'banana' || fruit === 'apple')? false: true; /* Add an expression here that validates if fruit is a banana or apple */

    const onSubmit = (event) => {
        event.preventDefault();
        (!error && setFruits([...fruits, fruit]));
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