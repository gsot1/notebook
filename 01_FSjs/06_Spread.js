// Need to combine two objects? As of ECMAScript 2018, you can use the SPREAD operator to do this

const half1 = {
    value1: "2",
    value2: 999,
};

const half2 = {
    // ...half1 // using the spread operator here will copy value1 in but will have value2 overwritten below (403)
    value2: 403,
    value3: {subv1: 34, subv2: "abc", subv3: true},
    value4() { console.log("wow") },
    // ...half1 // using the spread operator here will copy value1 in but overwrite the existing value2 with its own (999)
};

// Here's the spread operator in action to create a new object/class from combining two structures:

let exampleObject = {...half1, ...half2}; // (will use half2's value2 when used in this order)

// You can also use OBJECT.ASSIGN() but it's not as clean (necessary for using ECMAScript 2017 and below though)

exampleObject = Object.assign({}, half1, half2);

// This also works on arrays

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
console.log([...arr1, ...arr2]); // (returns [1, 2, 3, 3, 4, 5] because appending arrays doesn't overwrite shared indices)

// Pop quiz: what is the value of "foo" below?

const obj = { 
    foo: 1, 
    bar: 2, 
    baz: 3,
};

const newObj = {
    foo: 4,
    ...obj,
};

// newObj.foo === 1; (because obj was inserted via spread last, overwriting the original foo: 4)