# #45: Fundamentals Part 5

## You can find the completed assignments below:

- [Exercise 8](https://github.com/gsot1/odin-javascript-exercises/tree/main/08_calculator)
- [Exercise 9](https://github.com/gsot1/odin-javascript-exercises/tree/main/09_palindromes)
- [Exercise 10](https://github.com/gsot1/odin-javascript-exercises/tree/main/10_fibonacci)
- [Exercise 11](https://github.com/gsot1/odin-javascript-exercises/tree/main/11_getTheTitles)
- [Exercise 12](https://github.com/gsot1/odin-javascript-exercises/tree/main/12_findTheOldest)

## Array methods cheatsheet (Wes Bos)

- `.filter()` - run a testing function on every array item, true/false result either keeps or removes the item 
- `.map()` - run a modifying function on every array item, returns a new array of the same length
- `.sort()` - run a comparing function on every two array items at a time, true/false swaps or keeps each item pair's order 
- `.reduce()` - run a modifying function on every array item, returns a single new item computed from all the array items
- `.some()` - run a testing function on every array item, stops and returns true if one item evaluates to true
- `.every()` - run a testing function on every array item, returns true if all pass and false if one or more fails
- `.find()` - run a testing function on every array item, stops and returns the item that results in true
- `.findIndex()` - run a testing function on every array item, stops and returns the item's index that results in true
- `...` - REMEMBER: the spread operator converts node lists or objects or other arrays into a group of values that get passed through a function one after the other

```js
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [a1, a2];       // [[1, 2, 3], [4, 5, 6]]
const a4 = [...a1, ...a2]; // [1, 2, 3, 4, 5, 6]
```