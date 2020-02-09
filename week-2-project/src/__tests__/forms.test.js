import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {ContactForm, FruitForm, MathForm} from '../forms';

test('ContactForm submits and displays thank you text', async () => {
    const {getByText, getByLabelText} = render(<ContactForm/>);

    // get the email input by aria label
    const input = getByLabelText('contact-name');
    // set the value of the input to Idris
    fireEvent.change(input, {target: {value: 'Idris'}});

    // click on button
    const button = getByText(/Send it!/i);
    fireEvent.click(button);

    // find the thank you message after submitting
    getByText('Thanks for submitting Idris');
});

test('Mathform counts up numbers', async () => {
    const {getByText, getByLabelText} = render(<MathForm/>);

    // get the numberA input by aria label
    const inputA = getByLabelText('math-number-a');
    // set the value of the input
    fireEvent.change(inputA, {target: {value: 1}});

    // get the numberA input by aria label
    const inputB = getByLabelText('math-number-b');
    // set the value of the input
    fireEvent.change(inputB, {target: {value: 2}});

    getByText('The sum of a and b is 3');

    // get the numberA input by aria label
    fireEvent.change(inputA, {target: {value: 5}});
    fireEvent.change(inputB, {target: {value: 10}});

    getByText('The sum of a and b is 15');
});

test('Fruitform displays errors and validates input', async () => {
    const {getByText, getByLabelText, queryAllByTestId} = render(<FruitForm/>);

    // get the numberA input by aria label
    const input = getByLabelText('fruit-name');

    // set the value of the input to "pear"
    fireEvent.change(input, {target: {value: 'pear'}});

    getByText('I don\'t recognize this fruit please make a choice between "banana" or "apple"');

    // click on button
    const button = getByText(/Add/i);
    fireEvent.click(button);

    // Get all the fruit elements
    let elements = queryAllByTestId('fruit');

    // Check we should have no fruits as pear was invalid
    expect(elements.length).toEqual(0);

    // set the value of the input to "apple"
    fireEvent.change(input, {target: {value: 'banana'}});

    // click on the button
    fireEvent.click(button);

    // Get the fruit again
    elements = queryAllByTestId('fruit');

    // Validate if we have a fruit in the list
    expect(elements.length).toEqual(1);

    // set the value of the input to "banana"
    fireEvent.change(input, {target: {value: 'apple'}});

    // click on the button
    fireEvent.click(button);

    // Get the fruit again
    elements = queryAllByTestId('fruit');

    // Validate if we have 2 fruits in the list
    expect(elements.length).toEqual(2);
});