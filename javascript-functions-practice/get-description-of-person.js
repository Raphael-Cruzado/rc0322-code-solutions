/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var personName = person.name;
  var personJob = person.occupation;
  var personPlace = person.birthPlace;
  var personDesc = personName + ' is a ' + personJob + ' from ' + personPlace + '.';
  return personDesc;
}
