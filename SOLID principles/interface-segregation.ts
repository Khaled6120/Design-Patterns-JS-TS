/**
 * Segregation Principle (ISP): The ISP states that a class should not be forced to implement interfaces it doesn't use.
 * In other words, instead of having a single, monolithic interface that contains a lot of methods,
 * you should have smaller, more specific interfaces that are tailored to the needs of the classes that implement them.
 */

// Interface for eatable behavior
interface Eatable {
  eat(): void;
}

// Interface for flyable behavior
interface Flyable {
  fly(): void;
}

class Bird implements Flyable {
  fly() {
    console.log("Bird can fly.");
  }
}

class Dog implements Eatable {
  eat() {
    console.log("Dog can eat.");
  }
}

class Fish implements Eatable {
  eat() {
    console.log("Fish can eat.");
  }
}

const eagle = new Bird();
eagle.fly();

const bulldog = new Dog();
bulldog.eat();

const salmon = new Fish();
salmon.eat();

//-------------- Example-2 in JS----------------\\
class ManagerEmployee {
  manageTeam() {
    console.log("I am managing the team!!!");
  }
}

class EngineeringEmployee {
  codeFeature() {
    console.log("I am coding a feature!!!");
  }
}

class EngineeringManager extends ManagerEmployee {}

class SofwareEngineer extends EngineeringEmployee {}

const softwareEng = new SofwareEngineer();
softwareEng.codeFeature();
