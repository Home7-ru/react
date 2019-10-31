import React from 'react';
import ReactDOM from 'react-dom';

//синтаксис jsx
//const el = <h1>Hello World</h1>

//без jsx
const el= React.createElement('h1', null, 'Hello World');

ReactDOM.render(el, document.getElementById('root'));