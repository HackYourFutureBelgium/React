import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {InteractivePokedex, Pokedex} from "../api";


test('Pokedex: displays pokemon', async () => {
    const { findByText } = render(<Pokedex />);

    await findByText('ditto');
});

test('InteractivePokedex: displays pokemon', async () => {
    const { findAllByText } = render(<InteractivePokedex />);

    const firstButtons = await findAllByText('Learn more');
    fireEvent.click(firstButtons[0]);

    await findAllByText(/napping in bright sunlight/i);
});