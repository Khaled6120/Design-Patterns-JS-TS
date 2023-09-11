class BankFactory {
  transferToBank(type: string, amount: number, sender: string): Bank {
    switch (type) {
      case 'bank_A':
        return new Bank_A(amount, sender);
      case 'bank_B':
        return new Bank_B(amount, sender);
      default:
        return new Bank_Default(amount, sender); // Handle unknown bank types here
    }
  }
}

class Bank {
  private amount: number;
  private sender: string;

  constructor(amount: number, sender: string) {
    this.amount = amount;
    this.sender = sender;
  }

  withdraw() {
    // Default implementation for withdrawal
    console.log('Default withdrawal');
  }
}

class Bank_Default extends Bank {
  constructor(amount: number, sender: string) {
    super(amount, sender);
  }

  withdraw() {
    console.log('Withdrawed by Default');
  }
}

class Bank_A extends Bank {
  constructor(amount: number, sender: string) {
    super(amount, sender);
  }

  withdraw() {
    console.log('Withdrawed by A');
  }
}

class Bank_B extends Bank {
  constructor(amount: number, sender: string) {
    super(amount, sender);
  }

  withdraw() {
    console.log('Withdrawed by B');
  }
}

const bankFactory = new BankFactory();

const a_Bank = bankFactory.transferToBank('bank_B', 30000, 'Khaled');
a_Bank.withdraw();
