import React from 'react';
import ReactDOM from 'react-dom/client';

const createReact = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log(createReact);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(createReact);
