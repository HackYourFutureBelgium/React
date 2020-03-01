import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Reducer1, Reducer2, Reducer3} from "../reducer";

test('Reducer: reduces the decrement action', () => {
    const { getByText, getByTestId } = render(<Reducer1/>);

    // Get the "+" button
    const $plusButton = getByText('+');

    // Get the "-" button
    const $minusButton = getByText('-');

    // Make count 3
    fireEvent.click($plusButton);
    fireEvent.click($plusButton);
    fireEvent.click($plusButton);


    // Make count 1
    fireEvent.click($minusButton);
    fireEvent.click($minusButton);

    const $total = getByTestId('total');

    expect($total.innerHTML).toEqual('1');
});

test('Reducer: reset action', () => {
    const { getByText, getByTestId } = render(<Reducer2/>);

    // Get the "+" button
    const $plusButton = getByText('+');

    // Get the "reset" button
    const $resetButton = getByText('reset');

    // Make count 3
    fireEvent.click($plusButton);
    fireEvent.click($plusButton);
    fireEvent.click($plusButton);


    // Reset to 0
    fireEvent.click($resetButton);

    const $total = getByTestId('total');

    expect($total.innerHTML).toEqual('0');
});

test('Reducer: dispatching', () => {
    const { getByText, getByTestId } = render(<Reducer3/>);

    // Get the todo with id "a" checkbox button
    const $todoACheckBox = getByTestId('todoa');
    // Get the todo with id "b" checkbox button
    const $todoBCheckBox = getByTestId('todob');

    // Check todo a
    fireEvent.click($todoACheckBox);

    expect($todoACheckBox.checked).toEqual(true);

    // Uncheck todo a
    fireEvent.click($todoACheckBox);

    expect($todoACheckBox.checked).toEqual(false);

    // Check todo b
    fireEvent.click($todoBCheckBox);

    expect($todoBCheckBox.checked).toEqual(true);
});