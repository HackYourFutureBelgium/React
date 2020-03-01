import React from 'react';
import {render} from '@testing-library/react';
import {ThirdParty1, ThirdParty2, ThirdParty3} from "../thirdpartycomponent";

test('3rd party: add dependency', () => {
    const { getByRole } = render(<ThirdParty1/>);

    // Check if input of the datepicker is rendered
    const $input = getByRole('textbox');

    expect($input).toBeDefined();
});

test('3rd party: set initial value', () => {
    const { getByRole } = render(<ThirdParty3/>);

    // Check if input of the datepicker is rendered
    const $input = getByRole('textbox');

    expect($input.value).toContain('Q');
});