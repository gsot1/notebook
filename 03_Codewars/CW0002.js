// Categorize New Member by Brynx

/*

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

INPUT
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

OUTPUT
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

EXAMPLE:
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/

// MY VERSION

function openOrSenior(data){
  let results = [];
  for (let i = 0; i < data.length; i++) { // iterate over all elements
    if (data[i][0] > 54 && data[i][1] > 7) { // check if age is greater than 54 and handicap is greater than 7
      results.push('Senior');
    } else {
      results.push('Open');
    }
  }
  return results;
}

// BEST READABLE VERSION

function openOrSeniorBEST(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  // use .map() to run a function on every item in data (no forloop required) to get a new array of the same length
  // use destructuring in the arrow function's input to grab the two-item array inside each slot in data and assign them names
  // insert a condition that returns a boolean since that's what the function inside .map() is supposed to do
  // use a ternery operator to set the return array's value to 'Senior' if it passes the arrow function and 'Open' if it's false instead
}