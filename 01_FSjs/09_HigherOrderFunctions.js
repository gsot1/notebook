// In JavaScript, functions are just objects (so they can get passed around)

// Function declarations are always HOISTED so they're usable anywhere above the file

function doNothing() { return; };

// FUNCTION EXPRESSIONS instead declare a function inside a variable, making it unusable to the code above it

const doNothingAtAll = () => { return; };

// For best practice, use declarations for global code and expressions for local code

// Function expressions can also be used as an argument to other functions, making them completely anonymous

const emptyObject = { // take this example object here with an empty method
    method() {
        return;
    }
};
const doAbsolutelyNothing = emptyObject.method(function() { return; }); // if .method() took arguments, it could take an entire anonymous function expression

// Functions that use other functions as arguments or returns functions are called HIGHER-ORDER FUNCTIONS

// You can use this to create secondary anonymous/arrow functions that run immediately after existing ones on the fly 

function quickFunc(func) {
    func('pass in this string');
};
quickFunc(m => console.log(m)) // (returns "pass in this string") since argument variable m is suddenly a function with a string argument

// or you can return anonymous/arrow functions in a surrounding function

function matroshkaFunc() {
    return (val) => { // simple function that returns what it's given that entirely gets returned by its higher-order function
        return val;
    }
}

const outerFunc = matroshkaFunc(); // outerFunc is now entirely the inner function expression of matroshkaFunc

console.log(outerFunc(4)); // (returns 4)

// Here is a more real-world example

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function calc(x, y, op) { // the magic is that whatever you pass in for "op" gets called by its function of matching name
    return op(x, y);
}

console.log(calc(5, 2, sub)); // (returns 3)

// Pop quiz: Which one is a function declaration?

function foo() { return };           // <--------
const foot = () => { return };