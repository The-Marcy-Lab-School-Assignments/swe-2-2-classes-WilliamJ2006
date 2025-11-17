class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return (this.length + this.width) * 2;
  }
  isSquare() {
    return this.length === this.width ? true : false;
  }
}

class Vehicle {
  passengers = [];
  constructor(type, capacity, color) {
    this.type = type;
    this.capacity = capacity;
    color ? this.color = color : this.color = `black`;
  }
  paint(color) {
    return this.color = color;
  }
  addPassenger(passenger) {
    if (this.passengers.length === this.capacity) {
      return -1;
    } else {
      this.passengers.push(passenger)
      return this.passengers.length;
    }
  }
}

class PasswordManager {
  #password;
  constructor(password) {
    this.#password = password;
  }
  checkPassword(attempt) {
    return attempt === this.#password ? true : false;
  }
  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
      return true;
    }
    return false;
  }
}

class TodoList {
  #arr = [];
  constructor(title) {
    this.title = title;
  }
  addItem(description) {
    this.#arr.push(description)
    return this.#arr.length;
  }
  removeItem(description) {
    if (this.#arr.includes(description)) {
      this.#arr.splice(this.#arr.indexOf(description), 1)
      return description;
    }
    return null
  }
  getItems() {
    return [...this.#arr];
  }
}

class BankAccount {
  #balance;
  static #totalBalance = 0;
  constructor(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    balance ? this.#balance = balance : this.#balance = 0;
    BankAccount.#totalBalance += this.#balance;
  }
  showBalance() {
    return `Your balance is $${this.#balance.toFixed(2)}`
  }
  deposit(amount) {
    this.#balance += amount;
    BankAccount.#totalBalance += amount;
    return `Your balance is $${this.#balance.toFixed(2)}`
  }
  withdraw(amount) {
    if (this.#balance - amount < 0) {
      return `You do not have enough funds.`;
    } else {
      this.#balance -= amount;
      BankAccount.#totalBalance -= amount;
      return `Your balance is $${this.#balance.toFixed(2)}.`
    }
  }
  static getTotalHoldings() {
    return BankAccount.#totalBalance;
  }
}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
