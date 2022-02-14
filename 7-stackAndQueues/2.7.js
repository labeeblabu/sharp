// 394. Decode String
// Medium

// 7469

// 317

// Add to List

// Share
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being
//  repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets
//  are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only 
// for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

 

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
var decodeString = function(str) {
  let stack = [];
    let currStr = '';
    let currNum = 0;
    for (let i = 0; i < str.length; i ++) {
      if (str[i] === '[') {
        stack.push(currStr);
        stack.push(currNum);
        currStr = '';
        currNum = 0;
      } else if (str[i] === ']') {
        let prevNum = stack.pop();
        let prevStr = stack.pop();
        currStr = prevStr + currStr.repeat(prevNum);
      } else if (str[i] >= '0' && str[i] <= '9') {
        currNum = currNum * 10 + Number(str[i]);
      } else {
        currStr += str[i];
      }
  }
         return currStr;
  };