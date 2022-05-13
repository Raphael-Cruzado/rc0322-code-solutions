const takeAChance = require('./take-a-chance');
const p = takeAChance('Lance');

p.then(resolve => {
  console.log(resolve);
}).catch(error => {
  console.error(error.message);
});
