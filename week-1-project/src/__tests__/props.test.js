import React from 'react';
import { App } from '../props';
import { render } from '@testing-library/react';

// Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen
// https://reactjs.org/docs/components-and-props.html

// Fix the following tests
// For some tests you might need to adjust something in `props.js` others require you to fix the assertion.
// No need to change anything in tests that pass these are purely informative and are meant to teach you something.

test('The component App uses and renders with props', async () => {
    const { getByTestId } = render(<App title="My App" />);

    const element = await getByTestId('title');

    expect(element.innerHTML).toEqual('My App');
});

test('The component App uses and renders with other props', async () => {
    const { getByTestId } = render(<App title="My Other App" />);

    const element = await getByTestId('title');

    expect(element.innerHTML).toEqual('My Other App');
});


test('Given a new prop the app renders with a description', async () => {
    const { getByTestId } = render(<App title="My App" addDescription = {true} />);

    const element = await getByTestId('description');

    expect(element).toBeDefined();
});

test('Render with a state object using the spread operator ', async () => {
    const data = {
        title: 'My App',
    };

    const { getByTestId } = render(<App {...data} />);

    const element = await getByTestId('title');

    expect(element.innerHTML).toEqual('My App');
});

test('Renders 3 articles when given 3 articles', async () => {
    const data = {
        title: 'My App',
        articles: [
            {
                title: '10 Amazing Things you did not know about React'
            },
            {
                title: 'Discover the Best Javascript Framework'
            },
            {
                title: 'This simple trick will teach you everything about React'
            },
        ]
    };

    const { findAllByTestId } = render(<App {...data} />);

    const elements = await findAllByTestId('news-article');

    expect(elements.length).toEqual(3);
});

test('Renders articles with title ', async () => {
    const data = {
        title: 'My App',
        articles: [
            {
                title: '10 Amazing Things you did not know about React'
            },
            {
                title: 'Discover the Best Javascript Framework'
            },
            {
                title: 'This simple trick will teach you everything about React'
            },
        ]
    };

    const { findByText } = render(<App {...data} />);

    const article1 = await findByText('10 Amazing Things you did not know about React');
    const article2 = await findByText('Discover the Best Javascript Framework');
    const article3 = await findByText('This simple trick will teach you everything about React');

    expect(article1).toBeDefined();
    expect(article2).toBeDefined();
    expect(article3).toBeDefined();
});

test('Passing functions as props ', async () => {
    const data = {
        title: 'My App',
        articles: [
            {
                title: '10 Amazing Things you did not know about React',
                text: 'Vestibulum quis dictum est, eget volutpat dui. In facilisis sed tortor imperdiet fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ac nisl purus. Pellentesque facilisis massa sed pretium placerat. Nulla vitae tortor non ante aliquam consequat. Aenean posuere metus lorem, eu egestas ante aliquet eget. Pellentesque accumsan mi id lectus malesuada scelerisque. Vestibulum condimentum aliquam lacinia. Suspendisse efficitur euismod ullamcorper. Etiam a nibh pharetra erat consectetur aliquet sed ac mauris.',
            },
            {
                title: 'Discover the Best Javascript Framework',
                text: 'Nunc augue augue, pretium vitae viverra ut, pharetra eget tortor. Quisque condimentum et erat id semper. Proin at tincidunt tortor. Donec in ipsum lorem. Aenean massa felis, tristique a sem a, tincidunt vehicula libero. Nulla sed lorem fermentum, suscipit nisi eu, consectetur felis. Praesent non convallis sapien.',
            },
            {
                title: 'This simple trick will teach you everything about React',
                text: 'Fusce rhoncus, justo a molestie tempus, mi ex rhoncus libero, vitae efficitur lorem dolor id mi. Praesent et semper nibh. Aliquam ornare ipsum non scelerisque tempor. Cras nec lectus in lacus cursus aliquet ac eget felis. Vestibulum sed accumsan eros. Aliquam lobortis consequat augue ut hendrerit. Suspendisse potenti. Ut facilisis magna urna, sit amet laoreet lacus aliquam a. Integer tellus lectus, dignissim id porta volutpat, sollicitudin eget dui.',
            },
        ],
        calculateReadingLength: (text) => {
            const wordsPerMinute = 200;
            const words = text.split(' ').length;
            return Math.ceil(words / wordsPerMinute);
        }
    };

    const { getByTestId } = render(<App {...data} />);

    const element = await getByTestId('reading-length');

    expect(element.innerHTML).toEqual('Reading all article will take you 1 minute');
});

test('Passing functions as props: part 2', async () => {
    const data = {
        title: 'My App',
        articles: [
            {
                title: '10 Amazing Things you did not know about React',
                text: 'Vestibulum quis dictum est, eget volutpat dui. In facilisis sed tortor imperdiet fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ac nisl purus. Pellentesque facilisis massa sed pretium placerat. Nulla vitae tortor non ante aliquam consequat. Aenean posuere metus lorem, eu egestas ante aliquet eget. Pellentesque accumsan mi id lectus malesuada scelerisque. Vestibulum condimentum aliquam lacinia. Suspendisse efficitur euismod ullamcorper. Etiam a nibh pharetra erat consectetur aliquet sed ac mauris.',
            },
            {
                title: 'Discover the Best Javascript Framework',
                text: 'Nunc augue augue, pretium vitae viverra ut, pharetra eget tortor. Quisque condimentum et erat id semper. Proin at tincidunt tortor. Donec in ipsum lorem. Aenean massa felis, tristique a sem a, tincidunt vehicula libero. Nulla sed lorem fermentum, suscipit nisi eu, consectetur felis. Praesent non convallis sapien.',
            },
            {
                title: 'This simple trick will teach you everything about React',
                text: 'Fusce rhoncus, justo a molestie tempus, mi ex rhoncus libero, vitae efficitur lorem dolor id mi. Praesent et semper nibh. Aliquam ornare ipsum non scelerisque tempor. Cras nec lectus in lacus cursus aliquet ac eget felis. Vestibulum sed accumsan eros. Aliquam lobortis consequat augue ut hendrerit. Suspendisse potenti. Ut facilisis magna urna, sit amet laoreet lacus aliquam a. Integer tellus lectus, dignissim id porta volutpat, sollicitudin eget dui.',
            },
            {
                title: '10 Amazing Things you did not know about React',
                text: 'Vestibulum quis dictum est, eget volutpat dui. In facilisis sed tortor imperdiet fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ac nisl purus. Pellentesque facilisis massa sed pretium placerat. Nulla vitae tortor non ante aliquam consequat. Aenean posuere metus lorem, eu egestas ante aliquet eget. Pellentesque accumsan mi id lectus malesuada scelerisque. Vestibulum condimentum aliquam lacinia. Suspendisse efficitur euismod ullamcorper. Etiam a nibh pharetra erat consectetur aliquet sed ac mauris.',
            },
            {
                title: 'Discover the Best Javascript Framework',
                text: 'Nunc augue augue, pretium vitae viverra ut, pharetra eget tortor. Quisque condimentum et erat id semper. Proin at tincidunt tortor. Donec in ipsum lorem. Aenean massa felis, tristique a sem a, tincidunt vehicula libero. Nulla sed lorem fermentum, suscipit nisi eu, consectetur felis. Praesent non convallis sapien.',
            },
            {
                title: 'This simple trick will teach you everything about React',
                text: 'Fusce rhoncus, justo a molestie tempus, mi ex rhoncus libero, vitae efficitur lorem dolor id mi. Praesent et semper nibh. Aliquam ornare ipsum non scelerisque tempor. Cras nec lectus in lacus cursus aliquet ac eget felis. Vestibulum sed accumsan eros. Aliquam lobortis consequat augue ut hendrerit. Suspendisse potenti. Ut facilisis magna urna, sit amet laoreet lacus aliquam a. Integer tellus lectus, dignissim id porta volutpat, sollicitudin eget dui.',
            },
        ],
        calculateReadingLength: (text) => {
            const wordsPerMinute = 200;
            const words = text.split(' ').length;
            return Math.ceil(words / wordsPerMinute);
        }
    };

    const { getByTestId } = render(<App {...data} />);

    const element = await getByTestId('reading-length');

    // Can you figure out how this code is supposed to work ?
    // The function from the props is being called in a somewhat complicated way.
    // Figure out what is happening and what an appropriate fix would be.
    // You will only need to modify calculateReadingLength above\

    expect(element.innerHTML).toEqual('Reading all article will take you 2 minutes');
});

test('BONUS, I have solved the warning about the unique key', async () => {

    // When you run the test you might have noticed this warning "Warning: Each child in a list should have a unique "key" prop."
    // Can you solve the problem ?

    const iSolvedTheProblem = false;
    expect(iSolvedTheProblem).toBeTruthy();
});