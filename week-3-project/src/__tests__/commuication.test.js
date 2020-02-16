import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {FruitApp, FruitAppWithBalance, FruitsAndVegetables, InterActiveFruits} from '../communication';

test('InterActiveFruits: does parent child communication', async () => {
    const { queryAllByTestId, getByText } = render(<InterActiveFruits />);

    // get the generate button
    const generateButton = getByText(/Generate/i);
    fireEvent.click(generateButton);

    // get the bounce button
    const triggerBounceButton = getByText(/Bounce/i);
    fireEvent.click(triggerBounceButton);

    const bouncingElements = queryAllByTestId('bouncing');

    expect(bouncingElements.length).toBeGreaterThan(1);

    // get the rotate button
    const triggerRotateButton = getByText(/Rotate/i);
    fireEvent.click(triggerRotateButton);

    const rotatingElements = queryAllByTestId('rotating');

    expect(rotatingElements.length).toBeGreaterThan(1);
});

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

test('FruitsAndVegetables: controlled inputs', async () => {
    const { _ } = render(<FruitsAndVegetables />);

    // I did not have time to write a test for this 😅 please test the FruitsAndVegetables rendered and see what the bug is.

    const IHaveFixedTheBug = false;
    expect(IHaveFixedTheBug).toBeTruthy();
});