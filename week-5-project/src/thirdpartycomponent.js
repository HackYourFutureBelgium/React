import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Exercise 1: add react-datepicker to the dependencies
// TODO: add react date picker as a dependency with npm or yarn
const ThirdParty1 = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <p>Pick A Date</p>
            {/*<DatePicker selected={startDate} onChange={date => setStartDate(date)} />*/}
        </>
    );
};

// Exercise 2: setting the right props
// TODO: Set the selected props to the birthday of a coach
const ThirdParty2 = () => {
    // Create the `Date` with these argument 07/26/1993
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <p>Pick A Date</p>
            {/*<DatePicker*/}
            {/*    selected={startDate}*/}
            {/*    onChange={date => setStartDate(date)}*/}
            {/*/>*/}
        </>
    );
};


// Exercise 3: Quarter Picker
// TODO: Make sure the date picker allows you to pick quarters
// https://reactdatepicker.com/
const ThirdParty3 = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <p>Pick A Date</p>
            {/*Todo set the correct props on DatePicker, check the documentation*/}
            {/*<DatePicker*/}
            {/*    selected={startDate}*/}
            {/*    onChange={date => setStartDate(date)}*/}
            {/*/>*/}
        </>
    );
};

export { ThirdParty1, ThirdParty2, ThirdParty3 };