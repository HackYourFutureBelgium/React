import React from 'react';
import { App, MyApp } from '../component';
import { render, fireEvent } from '@testing-library/react';


// Time to get started with writing React components.
// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation
// https://reactjs.org/docs/components-and-props.html

// Fix the following tests
// For some tests you might need to adjust something in `component.js` others require you to fix the assertion.
// No need to change anything in tests that pass these are purely informative and are meant to teach you something.

test('The component App exist and can render', () => {
    // Take a look at where App is declared
    // See component.js

    render(<App />);
});

test('The component MyApp can be imported and can render', () => {
    // Create a new component in component.js called MyApp
    
    // Export that component in component.js

    render(<MyApp />);
});

test('The component MyApp renders "My First React App" as text', () => {
    const { getByText } = render(<MyApp />);

    // Make sure the MyApp component renders the text "My First React App"

    const element = getByText('My First React App');

    expect(element).toBeDefined();
});

test('The App component renders a component called NewsArticle', () => {
    // You can nest components in components
    // https://reactjs.org/docs/components-and-props.html#composing-components

    const { getAllByRole } = render(<App />);

    // Validates if the rendered App contains articles which are rendered by NewsArticle
    const elements = getAllByRole('article');
    expect(elements.length).toEqual(1);
});

test('The MyApp component renders 3 NewsArticle components', () => {
    const { getAllByRole } = render(<MyApp />);

    // Validates if the rendered App contains articles which are rendered by NewsArticle
    const elements = getAllByRole('article');
    expect(elements.length).toBeGreaterThanOrEqual(3);
});

test('The App component does a calculation and renders the result', () => {
    const { getByText } = render(<App />);

    const element = getByText('8084.73');
    expect(element).toBeDefined();
});

test('The MyApp component renders 200 NewsArticle components', () => {
    const { getAllByRole } = render(<MyApp />);

    // Validates if the rendered App contains articles which are rendered by NewsArticle
    const elements = getAllByRole('article');
    expect(elements.length).toEqual(200);
});

test('The App component handles a click on the button', async () => {
    const { getByTestId } = render(<App />);

    const element = await getByTestId('load-more');

    // You should see a message in the console that the button was click
    fireEvent.click(element);
});