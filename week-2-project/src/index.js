import React from 'react';
import ReactDOM from 'react-dom';
import {Ex1, Ex10, Ex11, Ex12, Ex13, Ex14, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9} from './state';
import {ContactForm, FruitForm, MathForm} from "./forms";
import {FruitApp, FruitAppWithBalance} from "./communication";

import './index.css';
import {InteractivePokedex, Pokedex} from "./api";

const App = () => {
    return (
        <section className="app">

            <h1>React - Week 2</h1>

            <section className="app_goal">
                <h2>State Hooks</h2>

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
                <h3>Exercise 6</h3>
                <Ex6/>
                <h3>Exercise 7</h3>
                <Ex7/>
                <h3>Exercise 8</h3>
                <Ex8/>
                <h3>Exercise 9</h3>
                <Ex9/>
                <h3>Exercise 10</h3>
                <Ex10/>
                <h3>Exercise 11</h3>
                <Ex11/>
                <h3>Exercise 12</h3>
                <Ex12/>
                <h3>Exercise 13</h3>
                <Ex13/>
                <h3>Exercise 14</h3>
                <Ex14/>
            </section>

            <section className="app_goal">
                <h2>Forms</h2>

                <h3>Contact Form</h3>
                <ContactForm/>

                <h3>Math Form</h3>
                <MathForm/>

                <h3>Fruit Form</h3>
                <FruitForm/>
            </section>

            <section className="app_goal">
                <h2>Child-Parent and Parent-Child Communication</h2>

                <h3>Fruit App</h3>
                <FruitApp/>

                <h3>Fruit App With Balance Indicator</h3>
                <FruitAppWithBalance/>
            </section>

            <section className="app_goal">
                <Pokedex/>

                <InteractivePokedex/>
            </section>
        </section>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
