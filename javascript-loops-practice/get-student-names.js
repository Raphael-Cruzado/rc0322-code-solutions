/* exported getStudentNames */
function getStudentNames(students) {
  var values = [];
  for (var key in students) {
    values.push(students[key].name);
  }
  return values;
}
