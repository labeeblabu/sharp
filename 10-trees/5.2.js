// 144. Binary Tree Preorder Traversal
// Easy

// 3632

// 116

// Add to List

// Share
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
var preorderTraversal = function(root) {
    if(!root)
    return []
  let res = []
  function traverse(node){
    res.push(node.val)
    if(node.left)
      traverse(node.left)
    if(node.right)
      traverse(node.right)
  }
  traverse(root)
  return res
  };