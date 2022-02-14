// 405. Convert a Number to Hexadecimal
// Easy

// 820

// 160

// Add to List

// Share
// Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

// Note: You are not allowed to use any built-in library method to directly solve this problem.

 

// Example 1:

// Input: num = 26
// Output: "1a"
// Example 2:

// Input: num = -1
// Output: "ffffffff"
var toHex = function(num) {
    if(num==0){
      return '0'
    }
    let n=num
    let hex=''
    let digits='0123456789abcdef'
    if(n<0){
      n=n+2**32
    }
    while(n){
      rem=n%16
      hex+=digits[rem]
      n=Math.floor(n/16)
    }
    return(hex.split('').reverse().join(''))
  };