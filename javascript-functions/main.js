function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds result:', convertMinutesResult);

function greet(name) {
  return 'Hey, ' + name;
}

var greetResult = greet('Lance');
console.log(greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);
console.log('getAreaResult result: ', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('First Name: ' + getFirstNameResult);

function getLastElement(array) {
  var lastItem = array.length - 1;
  return array[lastItem];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('last Element: ' + getLastElementResult);
