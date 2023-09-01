// Open-closed Principle:
// software entities (classes, modules, functions, etc)
// should be open for extension, but closed for modification.

// Objective of OCP:
// The primary goals of the OCP include creating software that is easy to
// maintain, extend, and reuse, promoting the use of inheritance, abstraction, and other object-oriented design principles,
// and reducing the possibility of introducing errors or breaking the existing code while adding new features.


// Abstract classes can be defined as classes that cannot be instantiated
class Notification {
    constructor(message){
        if(this.constructor === Notification) throw new Error("Object of Abstract Class cannot be created")
        this.message = message;
    }

    send(){
        // This method will be implemented by other classes differently. depends on the requirements of this class
        throw new Error("Abstract method has no implementation")
    }

}


class EmailNotification extends Notification {
    constructor(message, emailAddress) {
      super(message);
      this.emailAddress = emailAddress;
    }

    // Implement the send method for sending emails
    send() {
      console.log(`Email sent to ${this.emailAddress}: ${this.message}`);
    }
}

class SMSNotification extends Notification {
    constructor(message, phoneNumber) {
      super(message);
      this.phoneNumber = phoneNumber;
    }
  
    // Implement the send method for sending SMS messages
    send() {
      console.log(`SMS sent to ${this.phoneNumber}: ${this.message}`);
    }
}


class NotificationSender {
    constructor() {
      this.notifications = [];
    }

    // Add notifications to the sender
    addNotification(notification) {
      this.notifications.push(notification);
    }

    // Send all notifications
    sendNotifications() {
      this.notifications.forEach((notification) => {
        console.log(notification)
        notification.send();
      });
    }
}




const emailNotification = new EmailNotification("Hello, this is an email!", "john@example.com");
const smsNotification = new SMSNotification("Hello, this is an SMS!", "+1234567890");

const sender = new NotificationSender();
sender.addNotification(emailNotification);
sender.addNotification(smsNotification);

sender.sendNotifications();