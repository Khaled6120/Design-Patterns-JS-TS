/*
objects of a superclass should be able to be replaced with objects of a subclass
without affecting the correctness of the program.

In other words, if class B is a subclass of class A,
then an object of class A should be replaceable by an object of class B
without altering the desirable properties of the program.
That means the subclass should honor the interface contract provided by the superclass.
*/

class Shape {
    calculateArea() {
        throw new Error("Shape class is an abstract class")
    }


}
class Rectangle extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }

    calculateArea() {
        return this.width * this.height
    }

}
class square extends Shape {
    constructor(side) {
        super()
        this.side = side
    }

    calculateArea() {
        return this.side * this.side
    }

}



function printArea(shape) {
    console.log(shape.calculateArea())
}


const shapes = [
    new Rectangle(4, 5),
    new square(3),
    new Rectangle(2, 6),
];

shapes.forEach(shape => printArea(shape));


