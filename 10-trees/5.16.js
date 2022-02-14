// 513. Find Bottom Left Tree Value
// Medium

// 1927

// 203

// Add to List

// Share
// Given the root of a binary tree, return the leftmost value in the last row of the tree.

 

// Example 1:


// Input: root = [2,1,3]
// Output: 1
// Example 2:


// Input: root = [1,2,3,4,null,5,6,null,null,7]
// Output: 7
var findBottomLeftValue = function(root) {
    let nextMaxLevel = 0;
    let bottomleftVal = 0;
    function rec(root, level){
      if(!root) return;
      if(level === nextMaxLevel) {
        bottomleftVal = root.val
        nextMaxLevel+=1;
      }
      rec(root.left, level+1);
      rec(root.right, level+1);
    }
    rec(root, 0);
    return bottomleftVal;
  };