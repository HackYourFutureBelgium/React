import React from 'react';
import ReactDOM from 'react-dom';
import {Comp1, Comp2} from "./composition";
import {Ex1, Ex2, Ex3, Ex4, Ex5} from "./context";

import './index.css';

const App = () => {
    return (
        <section className="app">

            <h1>React - Week 4</h1>

            <section className="app_goal">
                <h2>Composition</h2>

                <h3>Exercise 1</h3>
                <Comp1/>

                <h3>Exercise 1</h3>
                <Comp2/>
            </section>

            <section className="app_goal">
                <h2>Context</h2>

                <h3>Exercise 1</h3>
                <Ex1/>

                <h3>Exercise 2</h3>
                <Ex2/>

                <h3>Exercise 3</h3>
                <Ex3/>

                <h3>Exercise 4</h3>
                <Ex4/>

                <h3>Exercise 5</h3>
                <Ex5/>
            </section>
        </section>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
