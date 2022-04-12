function ExampleConstructor() {

}

var newVar = new ExampleConstructor();

console.log('typeof newVar:', typeof newVar);
console.log('value of newVar:', newVar);

console.log('typeof newVar.__proto__', typeof newVar.__proto__);
console.log('value of example.__proto__', newVar.__proto__);

console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);

console.log('example instanceof ExampleConstructor', newVar instanceof ExampleConstructor);
