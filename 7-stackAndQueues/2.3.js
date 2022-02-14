// 20. Valid Parentheses
// Easy

// 11209

// 473

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if 
// the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
var isValid = function (s) {
 let stack = [];
    let map = {
     "(": ")",
     "[": "]",
     "{": "}",
    };
    let i = 0;
    while (i < s.length) {
     if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
     } else {
      if (map[stack.pop()] !== s[i]) return false;
     }
     i++;
    }
       return stack.length === 0;
   };