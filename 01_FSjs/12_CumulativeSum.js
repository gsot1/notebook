// Now entering the world of code interview questions... starting with CUMULATIVE SUM

// TRY FIRST: Create a function that takes an array of numbers and returns a number that is the sum of all values in the array.

let arrayEx = [1, 2, 3, 4, 5, 5, 9];

function addAll(arr) {
    return arr.reduce((w, x) => { return w + x; }); // w is PREV_VALUE and x is CURR_VALUE
}

console.log(addAll(arrayEx)); // (returns 29 correctly)

// ACTUAL ANSWER: close! you can write the function as a method on the same line

arrayEx = [1, 2, 3, 4, 5, 5, 9].reduce((w, x) => w + x, 0); // you can also use the entire arrow function as a PREV_VALUE and use 0 as a CURR_VALUE

console.log(arrayEx); // (also returns 29 correctly)

// TRY FIRST: Now do it WITHOUT using .reduce() or any built-in array method

arrayEx = [1, 2, 3, 4, 5, 5, 9]

function addAllNoReduce(arr) {
    let i = 0;
    
    for (let j of arr) {
        i += arr[j];
    }

    return i;
}

console.log(addAll(arrayEx)); // (returns 29 correctly)

// ACTUAL ANSWER: spot-on!

// Pop quiz: I am an odd number. Take away one letter and I become even. What number am I?

// Four
// Six
// Seven            // <-------------
// Eleven