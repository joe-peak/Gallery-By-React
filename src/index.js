import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import ClickComponent from './components/ClickComponent';

// Render the main component into the dom
ReactDOM.render(<div><App /><ClickComponent xxx='Hello React...... I am testing my local github'/></div>, document.getElementById('app'));
