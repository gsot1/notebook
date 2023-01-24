// Arrays are a powerful data structure with a few tricks you can use in JavaScript

// Here's the standard way to define an array

const arr0 = [1, 2, 3, 4, 4, 4, 5, 7];

// Here's how to initialize the Array class to create 100 array items of the same thing (7)

const arr1 = Array(100).fill(7)

// Here's a one-liner to initialize an Array from 1 to 101, also known as a RANGE

const arr2 = Array(100).fill(1).map((_, i) => i + 1); // .map() iterates over every item and writes in its return value (of value + 1)

// You can use spreads from ES2018+ to repeatedly write in and gather up the returned indices of .keys()

const arr3 = [...Array(100).keys()]; // .keys() is an array iterator, it counts iterations but doesn't "write to" anything

// Need to gather only the unique items from an array? Cast it into a new Set, and then use spreads to cast it back to Array

const arr0Unique = [...new Set(arr0)]; // new Set() ignores duplicate values and also writes nothing unless you gather with spreads

// Bonus: here's how to get a RANDOM element from an array

const random = arr0Unique[Math.floor(Math.random() * arr0Unique.length)]; // grab data by index made of a rounded random #
//                         rounding       0-1           array length

// Want to iterate over an entire array? Using a FOR OF loop is the cleanest way, since the array's length sets the limits

for (const item of arr0Unique) {
    console.log(item) // you can't use the current loop index/number like the i++ method though...
}

// DO NOT USE A "FOR IN" LOOP, since that iterates over an indexed but unsorted set of properties that you can't predict

// Instead, use .ENTRIES() in the for-of loop to treat the array as a map, where i is the key (and index) and item is its data

for (const [i, item] of arr0Unique.entries()) { // .entries() actually returns an array iterator object, but it works like a map
    console.log("This is loop #" + i + ": " + item);
}

// However, treating your data directly like this is imperative programming, and that's usually a no-no in JS world

// There are several built-in array methods you can already use to manipulate data without directly calling it (declarative)

//.forEach();     // allows you to pass in a function (callback) to run on every item (using index AND value as arguments)
//.map();         // allows you to pass in a function (callback) to run on every item (returns new array with the results)
//.filter();      // allows you to pass in a function (callback) to run on every item (new array of specific desired data)
//.find();        // allows you to pass in a function (callback) to run on every item (stops/returns first desired data)
//.findIndex();   // allows you to pass in a function (callback) to run on every item (stops/returns first desired index)
//.reduce();      // allows you to pass in a function (callback) to run on every item (calculates all data into one value)

// HOMEWORK:

arr0Unique.forEach(console.log); // runs console.log(<DATA>, <INDEX>, <ENTIRE ARRAY>)

console.log(arr1.map((v) => { return 0; })); // returns array with all arr1 values as 0 (arrow function passing in <DATA>)

console.log(arr0Unique.filter((v) => { if (v < 4) { return v; } })); // returns array of all values less than 4

console.log(arr0Unique.find((v) => { if (v == 5) { return v; } })); // returns first value from array that matches condition

console.log(arr0Unique.findIndex((v) => { if (v == 5) { return v; } })); // returns first matching array value's index [4]

console.log(arr0Unique.reduce((v, w) => { return v+w; })); // returns new value of array function applied to all values [22]
//                    <PREV VAL>, <NEXT VAL>     add them                                      1 + 2 + 3 + 4 + 5 + 7 = ...

// Pop quiz: which looping method is NOT recommended in most situations?

// for of
// for in               // <---------
// .forEach()
// .map()