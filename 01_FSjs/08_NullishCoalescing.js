// JavaScript is very weakly-typed, meaning it uses TYPE COERCION to determine if things are Truthy or Falsey
// But 0 or '' are both considered Falsy, meaning value = 0 || "default" doesn't make value === 0

// A useful ES2020+ feature is NULLISH COALESCING, which is similar to the "or" operator (||) but works differently

// This logical operator (??) only returns the right-hand value if the left one is null or undefined with stricter truthness

let whichOne = 1 ?? "2";
console.log(whichOne); // (returns 1)

whichOne = 0 ?? "2";
console.log(whichOne); // (returns 0 because it's not explicitly null or undefined)

whichOne = null ?? "2";
console.log(whichOne); // (returns "2" because null is null)

whichOne = whichOne?.ok ?? "2";
console.log(whichOne); // (returns "2" because whichOne.ok doesn't exist, making it undefined)

// Pop quiz: which of the following values are considered truthy by default in JS?

// null
// undefined
// 0
// -1          <-----