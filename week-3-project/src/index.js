import React from 'react';
import ReactDOM from 'react-dom';
import {FruitApp, FruitAppWithBalance, FruitsAndVegetables, InterActiveFruits} from "./communication";

import './index.css';
import {InteractivePokedex, Pokedex} from "./api";

const App = () => {
    return (
        <section className="app">

            <h1>React - Week 3</h1>

            <section className="app_goal">
                <h2>Child-Parent and Parent-Child Communication</h2>

                <h3>Interactive Fruits</h3>
                <InterActiveFruits />

                <h3>Fruit App</h3>
                <FruitApp/>

                <h3>Fruit App With Balance Indicator</h3>
                <FruitAppWithBalance/>

                <h3>Fruits and Vegetables</h3>
                <FruitsAndVegetables/>
            </section>

            <section className="app_goal">
                <Pokedex/>

                <InteractivePokedex/>
            </section>
        </section>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
