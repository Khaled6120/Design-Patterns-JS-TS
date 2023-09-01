// Signle Responsibility (S):
// A class should only have one responsibility.
// Furthermore, it should only have one reason to change.

// Benifits:
// 1- Lower coupling
// 2- Testing
// 3- Easier to understand
// 4- Divide and Conqure
// 5- Easier to debug

const fs = require('fs');

class Customer {

    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    getCusomerInfo(){
        return `Name: ${this.name} Email: ${this.email}`
    }
}


class Invoice {
    constructor(customer, amount) {
      this.customer = customer;
      this.amount = amount;
      this.paid = false;
    }

    calculateTotal() {
      return this.amount;
    }

    markAsPaid() {
      this.paid = true;
    }

    isPaid() {
      return this.paid;
    }

    saveToFile(filename) {
        InvoiceSaver.saveToFile(this, filename);
    }
}

class InvoiceSaver {
    static saveToFile(invoice, filename) {
      const data = JSON.stringify(invoice);
      
      fs.writeFile(filename, data, (err) => {
        if (err) {
          console.error(`Error saving invoice to ${filename}: ${err}`);
        } else {
          console.log(`Invoice saved to ${filename}`);
        }
      });
    }
  }


const customer1 = new Customer('Khaled', 'Khaled@gmail.com')
customer1.getCusomerInfo()

const invoice1 = new Invoice(customer1, 100);
console.log(invoice1.calculateTotal());
console.log(invoice1.isPaid());
invoice1.markAsPaid();
console.log(invoice1.isPaid());

invoice1.saveToFile("invoice1.json");
