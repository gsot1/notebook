// Array.diff by marcinbunsch

/*

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

// MY VERSION

function arrayDiff(a, b) {
    for (v of b) {
      while (a.includes(v)) {
        a.splice(a.indexOf(v), 1);
      }
    }
    return a;
  }

// BEST READABLE VERSION (no regex)

function arrayDiffBEST(a, b) {
    return a.filter(e => !b.includes(e)); // ok, so there was a method like .map() but for deleting values...
  }