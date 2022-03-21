const student = {
  firstName: 'Lance',
  lastName: 'Cruzado',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of student.livesinIrvine:', student.livesInIrvine);

student.previousOccupation = 'Accountant';
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

const vehicle = {
  make: 'Tesla',
  model: 'Cyber Truck',
  year: 2022
};

vehicle['color'] = 'gunmetal';
console.log('value ofvehicle["color"]:', vehicle['color']);

vehicle['isConvertible'] = false;
console.log('value ofvehicle["isConvertible"]:', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Elijah',
  type: 'jack russell'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
