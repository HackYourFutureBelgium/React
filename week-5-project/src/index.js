import React from 'react';
import ReactDOM from 'react-dom';
import {Reducer1, Reducer2, Reducer3} from "./reducer";

import './index.css';
import {ThirdParty1, ThirdParty2, ThirdParty3} from "./thirdpartycomponent";

const App = () => {
    return (
        <section className="app">

            <h1>React - Week 4</h1>

            <section className="app_goal">
                <h2>Reducer</h2>

                <h3>Exercise 1</h3>
                <Reducer1/>

                <h3>Exercise 2</h3>
                <Reducer2/>

                <h3>Exercise 3</h3>
                <Reducer3/>
            </section>

            <section className="app_goal">
                <h2>3rd Party Component</h2>

                <h3>Exercise 1</h3>
                <ThirdParty1/>

                <h3>Exercise 2</h3>
                <ThirdParty2/>

                <h3>Exercise 3</h3>
                <ThirdParty3/>
            </section>

        </section>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
