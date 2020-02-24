import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './TodoApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));

serviceWorker.unregister();
