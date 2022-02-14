// 230. Kth Smallest Element in a BST
// Medium

// 5705

// 111

// Add to List

// Share
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

// Example 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:


// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
var kthSmallest = function(root, k) {
    let res = [];
    rec(root, res);
    return res[k - 1];
  };
  function rec(root,res){
    if (!root) {
      return;
    }
    rec(root.left, res);
    res.push(root.val);
    rec(root.right, res);
  }