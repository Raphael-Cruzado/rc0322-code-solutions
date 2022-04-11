/* exported student */
var student = {
  firstName: 'Lance',
  lastName: 'Cruzado',
  subject: 'JS',
  getFullName: function (firstName, lastName) {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};
