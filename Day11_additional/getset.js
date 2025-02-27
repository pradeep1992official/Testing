class BankAccount {
  constructor(initalBal = 0) {
    this._bal = initalBal;
    this._history = [];
  }

  get balance() {
    return this._bal;
  }

  set balance({ amount, description }) {
    if (description == undefined) {
      console.error("Transaction must have a description");
    }

    this._bal += amount;
    this._history.push({ amount, description });
  }

  gethistory() {
    return this._history;
  }
}

let KVB = new BankAccount(1125);

console.log(KVB.balance);
KVB.balance = {amount : 300, description : "Credit"}; console.log(KVB.balance);
KVB.balance = {amount : 250, description : "Credit"}; console.log(KVB.balance);
KVB.balance = {amount : 250, description : "Credit"}; console.log(KVB.balance);
KVB.balance = {amount : 600, description : "Credit"}; console.log(KVB.balance);
KVB.balance = {amount : 850, description : "Credit"}; console.log(KVB.balance);
KVB.balance = {amount : 1000, description : "Credit"}; console.log(KVB.balance);
KVB.balance = {amount : 85, description : "Credit"}; console.log(KVB.balance);
KVB.balance = {amount : -300, description : "Debit"}; console.log(KVB.balance);
KVB.balance = {amount : -300, description : "Debit"}; console.log(KVB.balance);

console.log(KVB.balance);

console.log(KVB.gethistory());
