// Find the odd int by rbuckley

/*

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

// MY VERSION

function findOdd(A) {
    if (A.length === 1) { return A[0]; }
    let B = A.sort((a, b) => {return a - b;}); // numerical sort
    let last = B[0];
    let odd = true; // start with 1 instance (odd)
    for (let i = 0; i < B.length; i++) {
      if (B[i+1] !== B[i]) { // check for multiple instance
        if (odd) { 
          return B[i]; // we found our odd instance number
        } else {
          odd = true; // start at 1 instance again
        }
      } else { 
        odd = !odd; // +1 instance found
      }
    }
  }

// BEST READABLE VERSION (no regex)

function findOddBEST(A) {
    return A.reduce((a, b) => {a ^ b}); // apparently you can use binary math??
}
