const objArray = [
  {
    isbn: '5432',
    title: 'The Last Lion',
    author: 'William'
  },
  {
    isbn: '9823',
    title: 'indistractable',
    author: 'Nir Eyal'
  },
  {
    isbn: '0456',
    title: 'A Man Called Ove',
    author: 'Fred'
  }
];

console.log(objArray[0], 'typeof objArray[0]: ' + typeof objArray[0]);
console.log(objArray[1], 'typeof objArray[1]: ' + typeof objArray[1]);
console.log(objArray[2], 'typeof objArray[2]: ' + typeof objArray[2]);

console.log(JSON.stringify(objArray) + ' objArray type: ' + typeof objArray);

console.log(JSON.stringify({ NumberId: 'Louis' }) + ' typeOf NumberID: ' + typeof NumberID);

var student = '{"id":1, "name":"Louis"}';

console.log('student:', student, typeof student);

var studentParse = JSON.parse(student);

console.log('student:', studentParse, 'typeof: ' + typeof studentParse);
