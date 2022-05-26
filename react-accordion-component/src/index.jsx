import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

// function App() {
const languages = [
  {
    title: 'Hypertext Markup Language',
    text: 'Hypertext Markup Language (HTML) is the standard markup language for creating' +
        'web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a' +
        'triad of cornerstone technologies for the World Wide Web.'
  },
  {
    title: 'Cascading Style Sheets',
    text: 'Cascading Stule Sheets(CSS) is a style sheet language used for describing the presentation of a' +
        'document written in a markup language like HTML.CSS is a cornerstone technology of the' +
        'World Wide Web.alongside HTML and Javascript.'
  },
  {
    title: 'JavaScript',
    text: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming laganuage that confroms to the ECMAscript' +
        'specification.JavaScript has curly bracket syntax, dynamic typing, prototyped- based object - orientation and first - class' +
        'functions.'
  }
];

// }

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Accordion languages={languages}/>);
