// VOWEL COUNT by jayeshcp

/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

// MY VERSION

function getCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      let c = str[i].charCodeAt(); // get ASCII code of every letter
      if (c === 97 || c === 101 || c === 105 || c === 111 || c === 117) { // check if it matches aeiou (lowercase only)
        count += 1; // increment as needed
      }
    }
    return count;
  }

// BEST VERSION

function getCountBEST(str) {
  return (str.match(/[aeiou]/ig)||[]).length; // grab all vowels and make an array out of them and return the length (how does the regexp work? idk)
}