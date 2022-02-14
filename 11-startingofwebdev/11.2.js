// Palindrome String 
// Easy Accuracy: 50.77% Submissions: 72539 Points: 2
// Given a string S, check if it is palindrome or not.

// Example 1:

// Input: S = "abba"
// Output: 1
// Explanation: S is a palindrome
// Example 2:

// Input: S = "abc" 
// Output: 0
// Explanation: S is not a palindrome
 

// Your Task:
// You don't need to read input or print anything. Complete the function isPlaindrome()which accepts string S and returns an integervalue 1 or 0.


// Expected Time Complexity: O(Length of S)
// Expected Auxiliary Space: O(1)
class Solution {

    isPalindrome(S){
  
      let l = 0;
  
      let r = S.length -1;
  
      while(l < r){
  
        if(S[l] != S[r]){
  
          return 0;
  
        }
  
        l++;
  
        r--;
  
      }
  
      return 1;
  
    }
  
  }



//   344. Reverse String
// Easy

// 3927

// 893

// Add to List

// Share
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseString = function(s) {

    let left = 0;
  
    let right = s.length-1;
  
    while (left < right) {
  
      [s[left], s[right]] = [s[right], s[left]];
  
      left++;
  
      right--;
  
    }
  
    };