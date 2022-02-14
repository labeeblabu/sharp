// Longest Palindrome in a String 
// Medium Accuracy: 49.2% Submissions: 48880 Points: 4
// Given a string S, find the longest palindromic substring in S. Substring of string S: S[ i . . . . j ] where 0 ≤ i ≤ j < len(S). Palindrome string: A string which reads the same backwards. More formally, S is palindrome if reverse(S) = S. Incase of conflict, return the substring which occurs first ( with the least starting index).


// Example 1:

// Input:
// S = "aaaabbaa"
// Output: aabbaa
// Explanation: The longest Palindromic
// substring is "aabbaa".
// Example 2:

// Input: 
// S = "abc"
// Output: a
// Explanation: "a", "b" and "c" are the 
// longest palindromes with same length.
// The result is the one with the least
// starting index.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function longestPalin() which takes the string S as input and returns the longest palindromic substring of S.


// Expected Time Complexity: O(|S|2).
// Expected Auxiliary Space: O(1).
class Solution {
    longestPalin(S){
     //code here
     let len1=``
     let len2=``
     let str=``
     let longestStr=``
     for(let i=0;i<S.length;i++){
       len1=longestPalindrome(i,i,S)
       len2=longestPalindrome(i,i+1,S)
       str=len1.length>len2.length?len1:len2
       longestStr=str.length>longestStr.length?str:longestStr
     }
     function longestPalindrome(i,j,S){
       while(i>=0&&j<S.length&&S[i]==S[j]){
         i--
         j++
       }
       return S.slice(i+1,j)
     }
     return longestStr
    }
   }