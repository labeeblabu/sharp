// Remove Consecutive Characters 
// Basic Accuracy: 55.83% Submissions: 12672 Points: 1
// Given a string S delete the characters which are appearing more than once consecutively.

// Example 1:

// Input:
// S = aabb
// Output:  ab 
// Explanation: 'a' at 2nd position is
// appearing 2nd time consecutively.
// Similiar explanation for b at
// 4th position.

// Example 2:

// Input:
// S = aabaa
// Output:  aba
// Explanation: 'a' at 2nd position is
// appearing 2nd time consecutively.
// 'a' at fifth position is appearing
// 2nd time consecutively.
 

// Your Task:
// You dont need to read input or print anything. Complete the function removeConsecutiveCharacter() which accepts a string as input parameter and returns modified string.
 

// Expected Time Complexity: O(|S|).
// Expected Auxiliary Space: O(|S|).
class Solution{
    removeConsecutiveCharacter(s){
      //code here
      let resultStr=``
      for(let i=0;i<s.length-1;i++){
        if(s[i]!==s[i+1]){
          resultStr+=s[i]
        }
    }resultStr+=s[s.length-1]
      return resultStr
    }
  }