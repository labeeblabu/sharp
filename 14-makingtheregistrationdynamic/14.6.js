// Task Description
// Preorder Traversal of a tree both using recursion and Iteration





// Write the code in Javascript



// If you are stuck here, check the hints

// Your Answer

// Hint


var preorderTraversal = function(root) {

 if (!root) return [];

 var result = [];

 var stack = [root];

  

 while(stack.length) {

  var node = stack.pop();

  result.push(node.val);

  if (node.right) stack.push(node.right);

  if (node.left) stack.push(node.left);

 }

 return result;

};