import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FruitApp, FruitAppWithBalance } from '../communication';

test('FruitApp: does child parent communication', async () => {
    const { getByText, getByLabelText, queryAllByTestId } = render(<FruitApp />);

    // get the numberA input by aria label
    const input = getByLabelText('fruit-name');

    // Get all the fruit elements
    let elements = queryAllByTestId('fruit');

    // Check we should have no fruits as pear was invalid
    expect(elements.length).toEqual(0);

    // set the value of the input to "apple"
    fireEvent.change(input, { target: { value: 'banana' } });

    // click on button
    const button = getByText(/Add/i);
    fireEvent.click(button);

    // Get the fruit again
    elements = queryAllByTestId('fruit');

    // Validate if we have a fruit in the list
    expect(elements.length).toEqual(1);

    // set the value of the input to "banana"
    fireEvent.change(input, { target: { value: 'apple' } });

    // click on the button
    fireEvent.click(button);

    // Get the fruit again
    elements = queryAllByTestId('fruit');

    // Validate if we have 2 fruits in the list
    expect(elements.length).toEqual(2);
});

test('FruitAppWithBalance: displays errors and validates input', async () => {
    const { getByText, getByLabelText, queryAllByTestId } = render(<FruitAppWithBalance />);

    // get the numberA input by aria label
    const input = getByLabelText('fruit-name');

    // Get all the fruit elements
    let elements = queryAllByTestId('fruit');

    // Check we should have no fruits as pear was invalid
    expect(elements.length).toEqual(0);

    // set the value of the input to "apple"
    fireEvent.change(input, { target: { value: 'banana' } });

    // click on button
    const button = getByText(/Add/i);
    fireEvent.click(button);

    // Get the fruit again
    elements = queryAllByTestId('fruit');

    // Validate if we have a fruit in the list
    expect(elements.length).toEqual(1);

    // set the value of the input to "banana"
    fireEvent.change(input, { target: { value: 'apple' } });

    // click on the button
    fireEvent.click(button);

    // click on the button
    // add another apple
    fireEvent.click(button);

    getByText('Eat more bananas')
});

test('FruitAppWithBalance: supports oranges', async () => {
    const { getByText, getByLabelText, queryAllByTestId } = render(<FruitAppWithBalance />);

    // get the numberA input by aria label
    const input = getByLabelText('fruit-name');

    // Get all the fruit elements
    let elements = queryAllByTestId('fruit');

    // Check we should have no fruits as pear was invalid
    expect(elements.length).toEqual(0);

    // set the value of the input to "apple"
    fireEvent.change(input, { target: { value: 'orange' } });

    const button = getByText(/Add/i);
    fireEvent.click(button);

    getByText('🍊')
});

test('FruitAppWithBalance: supports peaches,', async () => {
    // At this point it might be interesting to see how the app can be refactored to better support adding more fruits
    // Refactor the code to more easily support more fruits in the future

    const { getByText, getByLabelText, queryAllByTestId } = render(<FruitAppWithBalance />);

    // get the numberA input by aria label
    const input = getByLabelText('fruit-name');

    // Get all the fruit elements
    let elements = queryAllByTestId('fruit');

    // Check we should have no fruits as pear was invalid
    expect(elements.length).toEqual(0);

    // set the value of the input to "apple"
    fireEvent.change(input, { target: { value: 'peach' } });

    const button = getByText(/Add/i);
    fireEvent.click(button);

    getByText('🍑')
});