// 94. Binary Tree Inorder Traversal
// Easy

// 6886

// 302

// Add to List

// Share
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

var inorderTraversal = function(root) {
    var result = [];
   traverse(root);
   return result
   function traverse(node){
     if(!node)return;   
     traverse(node.left);
     result.push(node.val)
     traverse(node.right);
   }
};