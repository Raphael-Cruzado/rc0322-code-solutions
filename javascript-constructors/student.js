/* exported Student */

function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype.getFullname = function () {
  var fullName = this.firstName + ' ' + this.lastName;
  return fullName;
};

Student.prototype.getIntroduction() = function () {
  var introduction = 'Hello, my name is ' + this.getFullname() + ' and I am studying ' + this.subject + '.';
  return introduction;
};
