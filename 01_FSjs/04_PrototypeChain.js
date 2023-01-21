// OBJECTS are any data types that aren't primitives, and they hold various other forms of data (including functions or other objects) that can be inherited into sub-objects or called upon for our uses

// The PROTOTYPE CHAIN is the order of which objects inherit their data from, usually from one PROTOTYPE at a time until you hit the root type of NULL

const exampleObject = { // A blueprint of an object is called a CLASS
    value1: "2",
    value2: 403,
    value3: {subv1: 34, subv2: "abc", subv3: true}, // objects can go in objects
    value4() { console.log("wow") }, // I think functions inside an object are called methods?
};

// Define all variables as CONST unless they have to be mutable with LET

// SEMICOLONS aren't always required but I like using them anyway

const exObjPrototype = Object.getPrototypeOf(exampleObject);
console.log(exObjPrototype); // Get and print the prototype of our exampleObject (returns null because it's the root type)

// You can test-run code with Node by running "node path/to/04_PrototypeChain.js" in the TERMINAL

// Don't forget to use "nvm use 16" because this course uses NODEJS 16

const exampleChild = {};
Object.setPrototypeOf(exampleChild, exampleObject); // This is how we make an object INHERIT from another

console.log(exampleChild.value2); // (returns 403 because it has the same values as exampleObject)

console.log(Object.getPrototypeOf(exampleChild)); // (returns the entire structure of exampleObject)

// All of the following return TRUE:

console.log(Object.getPrototypeOf(exampleChild) == exampleObject); // because they're both the same data type (child is an object built from the class)

console.log(Object.getPrototypeOf(exampleObject) == Object.prototype); // because the class is indeed a class (or prototype)

console.log(Object.getPrototypeOf(Object.prototype) == null); // because the root of all prototype chains are null

// Ultimately...

// CLASSES === PROTOTYPES
// OBJECTS === INSTANCES

// Pop quiz: Which class does an Array inherit from?

console.log(Object.getPrototypeOf(Array)); // (null? returns {} but there's no "null" option, "Primitive" wasn't right, makes sense actually since arrays HOLD one primitive, answer was "Object")