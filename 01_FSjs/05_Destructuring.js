const exampleObject = {
    value1: "2",
    value2: 403,
    value3: {subv1: 34, subv2: "abc", subv3: true},
    value4() { console.log("wow") },
};

// To access an object's PROPERTIES, one way you can do this is with DOT NOTATION

const extractedValue = exampleObject.value1;
console.log(extractedValue); // (returns "2")

// A more efficient way is DESTRUCTURING, which assigns multiple variables at once by grabbing multiple property names at once

const { value2, value3 } = exampleObject; // extracts value2 and value3 from the object with the same property variable names

const { value2: num1, value3: obj1} = exampleObject; // you can also use colons to rename your extracted object properties

console.log(value2 === num1); // true
console.log(value3 === obj1); // true

// Destructuring also works on ARRAYS (one-dimensional objects that hold unlabelled properties) with no colon notation needed

const exampleArray = ["2", 403, {subv1: 34, subv2: "abc", subv3: true}, console.log("wow")];

const [a1, a2, a3, a4] = exampleArray; // since array properties are unlabelled, we define our extracted variable names instantly

console.log(a2 === value2); // true
console.log(a3 === value3); // false (they are the same structure BUT different objects/copies of the class)

// As always, you can still grab single values by INDEX in an array (which starts at 0)

console.log(exampleArray[1]); // (returns 403) - does not work on classes/objects obviously, since they're not indexed

// Pop quiz: what is the name of the variable declared below?

const { foo: bar } = { foo: 23 }; // bar (because the latter defines an object and the former destructures it with a new variable name)