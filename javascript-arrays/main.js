var colors = ['red', 'white', 'blue'];

console.log('value of color[0]:', colors[0]);
console.log('value of color[1]:', colors[1]);
console.log('value of color[2]:', colors[2]);

console.log('America is', colors[0], colors[1] + ' and ' + colors[2]);

colors[2] = 'green';

console.log('Mexico is', colors[0], colors[1] + ' and ' + colors[2]);

var students = ['Anna', 'Derek', 'Paolo', 'Dan'];
var numberOfStudents = students.length;
console.log('There are', numberOfStudents, 'in the class');

var lastIndex = students[numberOfStudents - 1];
var lastStudent = lastIndex;
console.log('the last student in the array is', lastStudent);
console.log(students);
