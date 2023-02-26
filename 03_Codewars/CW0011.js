// Valid Parentheses by xDranik

/*

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

*/

// MY VERSION

function validParentheses(parens) {
    let openCt = 0;
    let closCt = 0;
    
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === '(') { openCt++; }
      else if (parens[i] === ')') { closCt++; }
      
      if (closCt > openCt) { return false; }
    }
    
    if (parens.length % 2 === 1 || closCt !== openCt) { return false; }
    
    return true;
  }

// BEST READABLE VERSION (no regex)

function validParenthesesBEST(parens){ // I WAS SO CLOSE I JUST HAD TO USE A SINGLE VARIABLE
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }