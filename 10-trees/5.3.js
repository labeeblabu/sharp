// 145. Binary Tree Postorder Traversal
// Easy

// 3753

// 135

// Add to List

// Share
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

var postorderTraversal = function(root) {
    let Array = [];
    function postOrder(root) {
      if(!root) return;
      postOrder(root.left)
      postOrder(root.right)
      Array.push(root.val)
    }
    postOrder(root);
    return Array;
  };