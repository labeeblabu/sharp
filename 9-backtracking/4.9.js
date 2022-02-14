// 17. Letter Combinations of a Phone Number
// Medium

// 8916

// 628

// Add to List

// Share
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

let MAPPING = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r', 's'],
    '8': ['t','u','v'],
    '9': ['w','x','y', 'z']
  };
  var letterCombinations = function(digits) {
    let ans = [];
    let n = digits.length;
    if (n < 1) return ans;
    let rec = (i, curr) => {
      if (curr.length === n) ans.push(curr);
      else {
        for (c of MAPPING[digits[i]]) {
          rec(i+1, curr + c);
        }
      }
    }
    rec(0, "");
    return ans;
  };