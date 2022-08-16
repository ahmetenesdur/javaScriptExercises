//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class BankAccount {
    constructor() {
      this.accountOpen = false
      this.accountBalance = 0
    }
    open() {
      if (this.accountOpen) {
        throw new ValueError()
      }
      this.accountOpen = true
      this.accountBalance = 0
    }
    close() {
      if (!this.accountOpen) {
        throw new ValueError()
      }
      this.accountOpen = false
    }
    deposit(value) {
      if (value <= 0 || !this.accountOpen) {
        throw new ValueError()
      }
      this.accountBalance += value
    }
    withdraw(value) {
      if (this.accountBalance < value || value <= 0 || !this.accountOpen) {
        throw new ValueError()
      }
      this.accountBalance -= value
    }
    get balance() {
      if (!this.accountOpen) {
        throw new ValueError()
      }
      return this.accountBalance
    }
  }
  export class ValueError extends Error {
    constructor() {
      super('Bank account error');
    }
  }