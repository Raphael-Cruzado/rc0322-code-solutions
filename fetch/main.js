fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

fetch('https://pokeapi.co/api/v2/pokemon/4', { method: 'GET' })
  .then(res => res.json())
  .then(charmander => console.log(charmander))
  .catch(err => console.error(err));
