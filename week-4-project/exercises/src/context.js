import React, {createContext, useContext, useState} from 'react';

// Exercise 1: Passing props
// TODO: Make all the buttons black
const Ex1 = () => {

    // Pass the background color through to the components
    const backgroundColor = 'black';

    return (
        <div>
            <Toolbar  />
            <ShoppingCart />
        </div>
    )
};

const Toolbar = () => {
    return (
        <div>
            <MyButton />
        </div>
    )
};

const ShoppingCart = () => {
    return (
        <div>
            <MyButton />
        </div>
    )
};

const MyButton = ({ backgroundColor = 'blue' }) => {
    return <button style={{backgroundColor: backgroundColor}}>Click</button>
};

// Exercise 2: Context
// TODO: Make all the buttons black

const ColorContext = createContext('pink');

const Ex2 = () => {
    return (
        <div>
            {/* Set a property value on the provider with as a value "black" */}
            <ColorContext.Provider>
                <OtherToolbar />
                <OtherShoppingCart />
            </ColorContext.Provider>
        </div>
    )
};

const OtherToolbar = () => {
    return (
        <div>
            <MyOtherButton />
        </div>
    )
};

const OtherShoppingCart = () => {
    return (
        <div>
            <MyOtherButton />
        </div>
    )
};

const MyOtherButton = () => {
    const backgroundColor = useContext(ColorContext);
    return <button style={{backgroundColor: backgroundColor}}>Click</button>
};

// Exercise 3: Using state and context
// TODO: Use state as the context value

const Ex3 = () => {

    const [color, setColor] = useState('pink');

    return (
        <div>
            {/* Set a property value on the provider with as a value color */}
            <ColorContext.Provider>
                <button onClick={_ => setColor('pink')}>Pink</button>
                <button onClick={_ => setColor('blue')}>Blue</button>
                <button onClick={_ => setColor('black')}>Black</button>
                <button onClick={_ => setColor('yellow')}>Yellow</button>
            </ColorContext.Provider>
            <OtherToolbar />
            <OtherShoppingCart />
        </div>
    )
};

// Exercise 4: Fix the bug
// TODO: Fix the bug

const Ex4 = () => {

    const [color, setColor] = useState('pink');

    return (
        <div>
            {/* Set a property value on the provider with as a value color */}
            <ColorContext.Provider>
                <OtherToolbar />
                <OtherShoppingCart />
                <button onClick={_ => setColor('pink')}>Pink</button>
                <button onClick={_ => setColor('blue')}>Blue</button>
                <button onClick={_ => setColor('black')}>Black</button>
                <button onClick={_ => setColor('yellow')}>Yellow</button>
            </ColorContext.Provider>
        </div>
    )
};

// Exercise 5: a more complex context
// TODO: make sure the context works

const ThemeContext = createContext({
    color: 'white',
    backgroundColor: 'black'
});

const Ex5 = () => {

    {/* Set an appropriate theme */}
    const theme = {};

    return (
        <div>
            <ColorContext.Provider value={theme}>
                <ThemedToolbar />
                <ThemedShoppingCart />
            </ColorContext.Provider>

        </div>
    )
};

const ThemedToolbar = () => {
    return (
        <div>
            <ThemedButton />
        </div>
    )
};

const ThemedShoppingCart = () => {
    return (
        <div>
            <ThemedButton />
        </div>
    )
};

const ThemedButton = () => {
    const theme = useContext(ThemeContext);

    return <button style={{backgroundColor: theme.backgroundColor, color: theme.color}}>Click</button>
};


export { Ex1, Ex2, Ex3, Ex4, Ex5 };