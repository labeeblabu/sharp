
// 201. Bitwise AND of Numbers Range
// Medium

// 2130

// 175

// Add to List

// Share
// Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

 

// Example 1:

// Input: left = 5, right = 7
// Output: 4
// Example 2:

// Input: left = 0, right = 0
// Output: 0
// Example 3:

// Input: left = 1, right = 2147483647
// Output: 0


 var rangeBitwiseAnd = function(left,right) {
    let l=left 
    let r=right 
    let count=0
    let result=0
    if(l==r){
      result=1
    }
    while(l!==r){
      l=l>>1
      r=r>>1
      count++
      result=l
    }
    result=result<<count
    return result
      };