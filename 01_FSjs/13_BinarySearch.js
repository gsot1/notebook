// Now for a less easy interview problem... BINARY SEARCH

// TRY IT: Create a function that takes a sorted array and a target value. Return the index of the target value in the array. Return -1 if not found

let arrayEx = [1, 2, 6, 9, 14, 18, 23, 29, 50];

function searchAttempt(arr, val) { // I don't remember search algorithms so this is going to be very inefficient
    let i = 0;

    while (arrayEx[i] !== val && i < arr.length) {
        i++
    }

    if (i < arr.length) {
        return i;
    }

    return -1;
}

console.log(searchAttempt(arrayEx, 6)); // (returns 2)
console.log(searchAttempt(arrayEx, 18)); // (returns 5)
console.log(searchAttempt(arrayEx, 51)); // (returns -1)

// NOT THE ANSWER: a more efficient version of a standard loop over the array

function searchAttemptThinner(arr, val) {
    for (let i = 0; i < arr.length; i++) { // this is considered O(n) complexity, or linear on the Big-O scale (not great)
        if (arr[i] === val) return i;
    }
}

// THE ANSWER: binary search is an algorithm that offers a more efficient O(log(n)) complexity

function binarySearch(arr, val, start=0, end=arr.length) { // tip: you can define default arguments using attributes of other arguments
    
    if (start > end) { // return -1 if we go through the whole thing and find nothing (this function loops by calling itself)
        return -1;
    }

    const mid = Math.floor((start + end) / 2); // grab rounded middle index

    if (arr[mid] === val) { // OUTCOME 1: we found the value!
        return mid; // we're done!
    }

    if (arr[mid] > val) { // OUTCOME 2: we overshot
        return binarySearch(arr, val, start, mid-1); // call the function again (callback) and check every value below the mid index
    }

    if (arr[mid] < val) { // OUTCOME 3: we undershot
        return binarySearch(arr, val, mid+1, end); // call the function again (callback) and check every value above the mid index
    }
}

console.log(binarySearch(arrayEx, 6)); // (returns 2 but faster)
console.log(binarySearch(arrayEx, 18)); // (returns 5 but faster)
console.log(binarySearch(arrayEx, 51)); // (returns undefined but faster)

// Pop quiz: what is the time complexity of binary search?

// O(1)
// O(log(n))         // <----------
// O(n)
// O(n^2)