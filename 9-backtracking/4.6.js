// 22. Generate Parentheses
// Medium

// 11612

// 456

// Add to List

// Share
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

var generateParenthesis = function(n) {
    let outputArray=[]
    backtrack(outputArray,``,n,0,0)
    return outputArray
  };
  function backtrack(outputArray,str,max,open,close){
    if(str.length==max*2){
      outputArray.push(str)
      return
    }
    if(open<max){
      backtrack(outputArray,str+`(`,max,open+1,close)
    }
    if(open>close){
      backtrack(outputArray,str+`)`,max,open,close+1)
    }
  }