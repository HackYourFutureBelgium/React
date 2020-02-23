import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {Ex1, Ex2, Ex3, Ex4, Ex5} from "../context";

test('Exercise 1: renders with color black', () => {

    // Render the Ex1 Component
    const { getAllByText } = render(<Ex1/>);

    // Get all the button by the name Click
    const $buttons = getAllByText('Click');

    // Check if each button has the color black
    $buttons.forEach(($button) => {
        expect($button.style.backgroundColor).toEqual('black');
    });
});


test('Exercise 2: context', () => {
    // Render the Ex2 Component
    const { getAllByText } = render(<Ex2/>);

    // Get all the button by the name Click
    const $buttons = getAllByText('Click');

    // Check if each button has the color black
    $buttons.forEach(($button) => {
        expect($button.style.backgroundColor).toEqual('black');
    });
});

test('Exercise 3: using state and context', () => {
    // Render the Ex3 Component
    const { getAllByText, getByText } = render(<Ex3/>);

    // Get the button named Yellow
    const $button = getByText('Yellow');

    // Click the yellow button
    fireEvent.click($button);

    // Check if each button has the color that was clicked
    const $affectedButtons = getAllByText('Click');
    $affectedButtons.forEach(($button) => {
        expect($button.style.backgroundColor).toEqual('yellow');
    });
});

test('Exercise 4: fix the bug', () => {
    // Render the Ex3 Component
    const { getAllByText, getByText } = render(<Ex4/>);

    // Get the button named Yellow
    const $button = getByText('Yellow');

    // Click the yellow button
    fireEvent.click($button);

    // Check if each button has the color that was clicked
    const $affectedButtons = getAllByText('Click');
    $affectedButtons.forEach(($button) => {
        expect($button.style.backgroundColor).toEqual('yellow');
    });
});

test('Exercise 5: a more complex context', () => {
    // Render the Ex3 Component
    const { getAllByText } = render(<Ex5/>);

    // Check if each button has the color that was clicked
    const $affectedButtons = getAllByText('Click');
    $affectedButtons.forEach(($button) => {
        expect($button.style.backgroundColor).toEqual('pink');
        expect($button.style.color).toEqual('blue');
    });
});