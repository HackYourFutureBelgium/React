import React, {useState} from 'react';

// Exercise: Fruit App
// User can submit their favourite fruit in our form
// The form however only supports banana's and apples
// TODO: finish connecting the FruitForm to our list
// TODO: add support for oranges, make sure we can add oranges to our list

const FruitApp = () => {
    const [fruits, setFruits] = useState([]);

    const onSubmit = () => {
        /* update the fruits here */
    };

    return (
        <section className={'fruit'}>
            <FruitForm onSubmitHandler={onSubmit} />
            <FruitList fruits={fruits} />
        </section>
    )
};

const FruitList = ({ fruits }) => {
    return (
        <ul>
            {fruits.map((fruit, index) => {
                return <li key={index}><Fruit name={fruit} /></li>
            })}
        </ul>
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

const FruitForm = ({ onSubmitHandler }) => {
    const [fruit, setFruit] = useState('');

    const isValidFruit = (fruitInput) => {
        return fruitInput === 'apple' || fruitInput === 'banana';
    };

    const onSubmit = (event) => {
        event.preventDefault(); // We disable the default behaviour of a form

        if (isValidFruit(fruit)) {
            console.log('onSubmitHandler');
            console.log(onSubmitHandler);
            onSubmitHandler(fruit)
        }
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
                <button type="submit">Add</button>
            </form>
        </section>
    )
};

// Exercise: Fruit App With Balance
// TODO: finish connecting the FruitForm to our list
// TODO: make sure FruitBalance is rendered
// TODO: todo support oranges
// TODO: todo support peaches

const FruitAppWithBalance = () => {
    const [fruits, setFruits] = useState([]);

    const onSubmitHandler = (fruit) => {
        /* update the fruits here */
    };

    return (
        <section className={'fruit'}>
            <FruitForm onSubmitHandler={onSubmitHandler} />
            <FruitList fruits={fruits} />
            /* Render the component FruitBalance here with the correct prop */
        </section>
    )
};

const FruitBalance = ({ fruits = [] }) => {
    const bananas = fruits.filter(fruit => fruit === 'banana');
    const apples = fruits.filter(fruit => fruit === 'apple');

    let message = 'Eat more bananas';
    if (bananas.length > apples.length) {
        message = 'Eat more apples';
    }

    return (
        <p>
            {message}
        </p>
    )
};

export { FruitApp, FruitAppWithBalance }