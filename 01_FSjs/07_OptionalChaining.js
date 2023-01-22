// As a form of error handling, you can use OPTIONAL CHAINING to assume an object is undefined instead of error-ing at runtime

// It only works in ES2020+

const nonExistentObject = {};

const unhandled = nonExistentObject.property;

// Running this causes a TypeError:

//console.log(unhandled.property)

// Running this simply returns "undefined"

console.log(unhandled?.property)

// You probably don't have to deal with this in TypeScript

// Pop quiz: what is the return value when calling a property that does not exist with optional chaining?

// undefined