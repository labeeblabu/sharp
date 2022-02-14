// 404. Sum of Left Leaves
// Easy

// 2993

// 236

// Add to List

// Share
// Given the root of a binary tree, return the sum of all left leaves.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:

// Input: root = [1]
// Output: 0
var sumOfLeftLeaves = function(root) {
    return rec(root, false);
    function rec(node, isLeft) {
      if (node == null) return 0;
      if (node.left == null && node.right == null && isLeft) {
        return node.val;
      }
      const left = rec(node.left, true);
      const right = rec(node.right, false);
      return left + right;
    }
  };