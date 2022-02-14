// 102. Binary Tree Level Order Traversal
// Medium

// 7221

// 145

// Add to List

// Share
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
var levelOrder = function(root) {
  var result = [];
    var level = 0;
    traverse(root, level);
    return result;
    function traverse(root, level) {
      if (root === null) {
        return;
      }
      else {
        if (level >= result.length) {
           result[level] = [];
        }
        result[level].push(root.val);
        traverse(root.left, level + 1);
        traverse(root.right, level + 1);
        }
    }
  }