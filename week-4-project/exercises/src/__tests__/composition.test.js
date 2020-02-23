import React from 'react';
import {render} from '@testing-library/react';
import {Comp1, Comp2} from "../composition";

test('Composition: the children prop', () => {
    // Render the Comp1 Component
    const { getByText } = render(<Comp1/>);

    // Get the paragraph by the text in it
    const $paragraph = getByText('Foobar');

    expect($paragraph.parentElement.style.backgroundColor).toEqual('pink');
});

test('Composition: composing', () => {
    // Render the Comp1 Component
    const { getByText } = render(<Comp2/>);

    // Get the first item with the text foo
    const $item = getByText('foo');

    expect($item.innerHTML).toEqual('<button>Edit</button><button>Delete</button>foo');
});