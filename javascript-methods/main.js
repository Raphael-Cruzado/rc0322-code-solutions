var first = 4;
var second = 7;
var third = 2;

var maximumValue = Math.max(first, second, third);

console.log('maximumValue:', maximumValue);

var heroes = ['Batman', 'Moon Knight', 'Superman', 'Spider-Man'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

var randomHero = heroes[randomIndex];
console.log('randomIndex:', randomIndex);

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'LOTR',
    author: 'JRR Tolkien'
  },

  {
    title: 'Sapiens',
    author: 'Yuval Noah'
  },

  {
    title: 'Indistractible',
    author: 'Nir Eyal'
  }
];

var lastBook = library.pop();
console.log(lastBook);

var firstBook = library.shift();
console.log(firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log(library);

var fullName = 'Lance Cruzado';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
