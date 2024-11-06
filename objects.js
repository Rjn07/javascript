// objects can made by two types literals and constructor
// singleton - literals ki trh bnate hhai object to singleton ni bnta but constructor k trh me bnega
 // constructor
// Object.create 

// object literals

// symbol ko square bracket ki trh use krna hota hai ans acess bhi
// this ka use same object ko refernce karne ke liye bhi hota hai

const mySym =Symbol("key1")

const JsUser={
    name : "tajan",
    [mySym]:"mykey1",
    age: 22
    ,lastlogin:["monday ","tuesday"],
    email:"rajan420@gmail.com"

}

console.log(JsUser.email)
console.log(JsUser[mySym])
Object.freeze(JsUser) // ye object ko freeze kr dega tb koi bhi koi value change ni kar payega
//square notation
const person10 = {
    "first-name": "Alice",
    "age": 30
};

console.log(person10["first-name"]); // Output: "Alice"

// Choosing Between Dot Notation and Square Bracket Notation
// Use dot notation when you know the property name ahead of time and it’s a valid identifier.
// Use square bracket notation when the property name is dynamic, or it contains characters that aren’t allowed in dot notation.
// Both notations are useful and make JavaScript objects more versatile!
const person1 = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
console.log(person1.greet())

// using the new Object() syntax
const person4 = new Object()

person4.name="rajan";

console.log(person4.name)

//using object.create()

const personnPrototype={
    greet : function(){
        console.log("hello "+ this.name);

    }
}

const personn =Object.create(personnPrototype);
personn.name="harjaee";

console.log(personn.name)






// JavaScript objects are complex data structures that let you store collections of key-value pairs, where keys are strings or symbols, and values can be any data type, including functions, other objects, arrays, and more. Let's dive deeper into the various features of objects in JavaScript.

// ### 1. **Creating Objects**
// You can create objects in several ways in JavaScript:

// #### **Object Literals**
// The most common way is using an object literal, where you define the key-value pairs directly.
// ```javascript
const person5 = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};


// #### **Using the `new Object()` Syntax**
// You can also use the `new Object()` constructor, though this is less common.

const person = new Object();
person.name = "Alice";
person.age = 30;


// #### **Using Object.create()**
// The `Object.create()` method is used when you want to create a new object with a specified prototype.

const personPrototype = {
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

const person = Object.create(personPrototype);
person.name = "Alice";


// #### **Using Classes (ES6)**
// Classes provide a more structured way to create objects, especially when working with constructors.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, " + this.name);
    }
}

const person = new Person("Alice", 30);

// ### 2. **Accessing Properties**
// As discussed, properties can be accessed using dot notation or square bracket notation.

// ### 3. **Adding, Modifying, and Deleting Properties**
// JavaScript objects are dynamic, meaning you can add, modify, or delete properties at runtime.

// #### Adding and Modifying Properties

const car = {};
car.make = "Toyota"; // Adding a property
car.model = "Camry"; // Adding another property
car.model = "Corolla"; // Modifying a property


// #### Deleting Properties
// You can remove a property using the `delete` operator.

delete car.model;


// ### 4. **Nested Objects**
// Objects can contain other objects, making them useful for storing structured data.

const employee = {
    name: "Bob",
    position: {
        title: "Developer",
        department: "Engineering"
    }
};

console.log(employee.position.title); // Output: "Developer"

// ### 5. **Object Methods**
// Objects can have methods (functions associated with the object). When defined inside an object, functions have access to the object’s properties using the `this` keyword.


const person = {
    name: "Alice",
    greet() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // Output: "Hello, Alice"

// ### 6. **Iterating Over Objects**
// There are various ways to iterate over objects:

// #### Using `for...in`
// The `for...in` loop is useful for iterating over an object's properties.

const person = { name: "Alice", age: 30 };

for (const key in person) {
    console.log(key + ": " + person[key]);
}


//#### Using `Object.keys()`, `Object.values()`, and `Object.entries()`
//- **`Object.keys(obj)`**: returns an array of property names.
//- **`Object.values(obj)`**: returns an array of property values.
//- **`Object.entries(obj)`**: returns an array of `[key, value]` pairs.


const person = { name: "Alice", age: 30 };

console.log(Object.keys(person));   // Output: ["name", "age"]
console.log(Object.values(person)); // Output: ["Alice", 30]
console.log(Object.entries(person)); // Output: [["name", "Alice"], ["age", 30]]


//### 7. **Property Descriptors**
//Each property in an object has metadata associated with it, called a property descriptor. These control certain behaviors:

-// **`writable`**: If `false`, the property cannot be changed.
//- **`enumerable`**: If `false`, the property does not appear in loops (e.g., `for...in`).
//- **`configurable`**: If `false`, the property cannot be deleted or modified.

//You can define property descriptors using `Object.defineProperty()`.


// const person12 = {};
Object.defineProperty(person12, "name", {
    value: "Alice",
    writable: false,     // Cannot change the value
    enumerable: true,    // Will show up in loops
    configurable: false  // Cannot delete or reconfigure
});

console.log(person12.name); // Output: "Alice"
person12.name = "Bob";      // No effect because writable is false
console.log(person12.name); // Output: "Alice"


// ### 8. **Prototypes and Inheritance**
// JavaScript objects have a hidden link to another object called their **prototype**. This allows objects to inherit properties and methods from other objects.

// #### Setting the Prototype
// You can create an object with a specific prototype using `Object.create()`.


const parent = {
    greet() {
        console.log("Hello!");
    }
};

const child = Object.create(parent);
child.name = "Alice";
child.greet(); // Output: "Hello!" (inherited from parent)

// #### Prototype Chain
// If an object doesn’t have a property, JavaScript looks up the chain of prototypes until it finds the property or reaches the end of the chain.

// ### 9. **`this` Keyword in Objects**
// In the context of an object, `this` refers to the object itself, but its behavior can vary in different situations, especially with functions passed as callbacks or in nested functions.

// ### 10. **Object Cloning**
// There are several ways to clone objects, especially useful when working with complex objects:

// - **Shallow Copy** with `Object.assign()` or spread operator `{...obj}`.
// - **Deep Copy** using `structuredClone()` (for compatible environments) or libraries like Lodash for complex objects.

// #### Example of Shallow Copy:

const original = { name: "Alice" };
const copy = { ...original };


// ### 11. **Common Object Methods**
// - **`Object.assign(target, ...sources)`**: Copies properties from source objects to a target object.
// - **`Object.freeze(obj)`**: Makes an object immutable (prevents changes).
// - **`Object.seal(obj)`**: Prevents adding or deleting properties but allows modifications of existing properties.
// - **`Object.keys(obj)`**, **`Object.values(obj)`**, and **`Object.entries(obj)`**.

// ### Summary
// JavaScript objects are flexible and powerful, enabling complex data structures and logic encapsulation. Understanding objects' structure, properties, and methods gives you a solid foundation for working with advanced JavaScript features.