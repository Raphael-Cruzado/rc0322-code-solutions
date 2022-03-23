/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstName = person.firstName;
  var firstInitial = firstName.charAt(0);
  var lastName = person.lastName;
  var secInitial = lastName.charAt(0);
  return firstInitial + secInitial;
}
