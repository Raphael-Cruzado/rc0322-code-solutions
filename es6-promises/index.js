const takeAChance = require('./take-a-chance');
const p = takeAChance('Lance');

p.then(message => {
  console.log(message);
}).catch(message => {
  console.error(message);
});
