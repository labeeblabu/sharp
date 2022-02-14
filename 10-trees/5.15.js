// 199. Binary Tree Right Side View
// Medium

// 5857

// 320

// Add to List

// Share
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

// Example 1:


// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []
function rightSideView(root) {
    let output = []
    dfs(root, 0, output);
    return output;
    function dfs(root, level) {
      if (!root) {
        return 
      }
      if (output.length === level) {
        output.push(root.val);
      }
      dfs(root.right, level+1, output);
      dfs(root.left, level+1, output);
    }
  }