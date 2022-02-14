// Palindrome String 
// Easy Accuracy: 50.77% Submissions: 72580 Points: 2
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