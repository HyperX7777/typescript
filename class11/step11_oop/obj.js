// Basic
let obj1 = {
    firstName: 'Ali - Manual Object',
    display() {
        console.log(this.firstName);
    }
};
// this allows us to access the properties and methods of the object
// Technically: this represents the whole object 
obj1.display();
// Class - creating a type/structure
class User {
    firstName;
    constructor(firstnaam) {
        this.firstName = firstnaam; // In above code it is used to give value to firstName - also if we don't want to pass any value and don't want to make consutructor it is made by default
    }
    display() {
        console.log(this.firstName);
    }
}
const obj2 = new User("Shera - Dynamic");
obj2.display();
const obj3 = new User("Arbaz Butt - Dynamic");
obj3.display();
// Use principles while making objects
// Make class objects with their first letter Capital
// Abstraction
class Operation {
    num1;
    num2;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    ;
}
// Inheritation - Inherting the properties and methods for reusability to avoid repetition
// Example 1
class Addition extends Operation {
    constructor(a, b) {
        super(a, b); // It will call parent class constructor
    }
    ;
    execute() {
        return this.num1 + this.num2;
    }
}
const obj4 = new Addition(25, 75);
console.log(obj4.execute());
// Example 2 - In child class default constructor automatically made in this and calling super automatically
class Subtraction extends Operation {
    execute() {
        return this.num1 - this.num2;
    }
}
const obj5 = new Subtraction(200, 50);
console.log(obj5.execute());
export {};
// Encapsulation - used to make methods or properties private
// so they are not accessible outside the class
// by default they are public
// Why we do that?
// Prevents external code from accidentaly manipulating internal properties/state
// Allows to change internal implmentation without risk of breaking external code
// In Polymorphism we can modify/overwrite a method it 
// inherited from a parent class like we did in line 57 & 68 from line 45
