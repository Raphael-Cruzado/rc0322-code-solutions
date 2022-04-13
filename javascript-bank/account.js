/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var withdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var deposits = [];
  var withdrawals = [];
  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposits.push(this.transactions[i]);
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawals.push(this.transactions[i]);
    }
  }

  var depositTotal = 0;
  for (var j = 0; j < deposits.length; j++) {
    depositTotal += deposits[j].amount;
  }

  var withdrawalTotal = 0;
  for (var k = 0; k < withdrawals.length; k++) {
    withdrawalTotal += withdrawals[k].amount;
  }

  var balance = depositTotal - withdrawalTotal;
  return balance;
};
