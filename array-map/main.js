const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(x => x * 2);
console.log(doubled);

const convertToDecimal = numbers.map(x => Number.parseFloat(x).toFixed(2));
const prices = convertToDecimal.map(x => '$' + x);
console.log(prices);

const upperCased = languages.map(language => language.toUpperCase(language));
console.log(upperCased);

const firstLetters = languages.map(language => language.charAt(0));
console.log(firstLetters);
