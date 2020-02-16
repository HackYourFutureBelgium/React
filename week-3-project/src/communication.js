import React, {useState} from 'react';

import './communication.css';

// Exercise: InterActive Fruits
// Instruct the fruits in our grid to activate certain animations
// TODO: make sure to pass the intent to bounce and rotate to the child components

const InterActiveFruits = () => {
    const rows = 4;
    const columns = 5;
    const fruits = ['banana', 'apple'];

    const [grid, setGrid] = useState([]);

    // On click generate a grid of fruits
    const handleGenerateClick = () => {
        const grid = [];

        // Generate a matrix of rows x columns
        for (let row = 0; row < rows; row++) {
            grid[row] = [];
            for (let column = 0; column < columns; column++) {
                // Set the value to a random fruit
                const random = Math.floor(Math.random() * fruits.length);
                grid[row][column] = fruits[random];
            }
        }

        // Update the state
        setGrid(grid);
    };

    return (
        <section>
            <table>
                <tbody>
                {
                    grid.map((row, rowIndex) => {
                        return (
                            <tr key={`${rowIndex}`}>
                                {
                                    row.map((fruit, columnIndex) => {return (
                                        <td key={`${rowIndex}_${columnIndex}_${fruit}`}>
                                            {/* TODO: Add state variables for bounce and rotate, assign them here */}
                                            <InterActiveFruit key={`${rowIndex}_${columnIndex}_${fruit}`} name={fruit} bounce={false} rotate={false} />
                                        </td>
                                    )})
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <button onClick={handleGenerateClick}>Generate</button>
            {/* TODO: Add a click handler for bounce and rotate */}
            <button>Bounce</button>
            <button>Rotate</button>
        </section>
    )
};

const InterActiveFruit = ({ name, bounce, rotate }) => {
    const [position, setPosition] = useState([]);

    // Just some fun on click let the animation fly of screen
    const handleClick = () => {
        const angle = Math.floor(Math.random() * 360);
        const flipSwitch = Math.floor(Math.random() * 2);
        let x = 9000;
        if (flipSwitch === 1) {
            x = -x;
        }
        const y = x / Math.tan(angle);
        setPosition([x, y]);
    };

    let fruitMoji;
    if (name === 'banana') {
        fruitMoji = '🍌';
    }
    else if (name === 'apple') {
        fruitMoji = '🍎'
    }

    const style = {};
    if (position.length) {
        style.animation = 'unset';
        style.transform = `translate(${position[0]}px, ${position[1]}px)`
    }

    // Given the props assign a class to containers below
    // The classes are named after the animation they perform
    let bouncingClass = '';
    if (bounce === true) {
        bouncingClass = 'BouncingContainer';
    }
    let rotatingClass = '';
    if (rotate === true) {
        rotatingClass = 'RotatingContainer'
    }

    return (
        <div style={style} className="FruitContainer">
            <div className={bouncingClass} data-testid={bouncingClass ? 'bouncing' : false}>
                <div className={rotatingClass} data-testid={rotatingClass ? 'rotating' : false}>
                    <span onClick={handleClick} aria-label={name} role="img" className="BouncingFruit">{fruitMoji}</span>
                </div>
            </div>
        </div>
    )

};


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

const FruitsAndVegetables = () => {

    const [produce, setActiveProduce] = useState('fruits');

    const list = [
        {
            produce: 'fruits',
            default: 'apple',
            selected: []
        },
        {
            produce: 'vegetables',
            default: 'cabbage',
            selected: []
        }
    ];

    const [ activeConfiguration ] = list.filter(produceConfiguration => produceConfiguration.produce === produce);

    return (
        <div>
            <p>
                Produces:
                {list.map((produceConfiguration) => (
                    <label key={produceConfiguration.produce}>
                        <input
                            type="radio"
                            name="produce"
                            checked={produceConfiguration.produce === produce}
                            onChange={() => setActiveProduce(produceConfiguration.produce)}
                        />{" "}
                        {produceConfiguration.produce}
                    </label>
                ))}
            </p>
            {/* You should add a property here, a unique key so the input updates when the configuration changes */}
            <ProduceInput defaultProduce={activeConfiguration.default} />
        </div>
    );
};

const ProduceInput = ({ defaultProduce }) => {
    const [produce, setProduce] = useState(defaultProduce);

    const handleChange = (event) => {
        setProduce(event.target.value);
    };

    return (
        <label>
            Produce: <input onChange={handleChange} value={produce} />
        </label>
    );
};

export { FruitApp, FruitAppWithBalance, InterActiveFruits, FruitsAndVegetables }