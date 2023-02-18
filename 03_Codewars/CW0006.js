// Split Strings by jhoffner

/*

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

// MY VERSION

function solution(str){
    let i; // declare index outside...
    let ans = [];
    for (i = 0; i < str.length; i++) {
      if (i % 2 === 1) {
        ans.push(str[i - 1] + str[i]);
      }
    }
    if (i % 2 === 1) { // ...to catch odd-number words
      ans.push(str[i - 1] + '_');
    }
    return ans;
  }

// BEST READABLE VERSION

function solutionBEST(str){ // I was close!
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) { // appending the _ on the end of odd-number words would be smarter yes
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
  }