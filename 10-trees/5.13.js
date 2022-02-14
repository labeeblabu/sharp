// 783. Minimum Distance Between BST Nodes
// Easy

// 1494

// 305

// Add to List

// Share
// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

 

// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1
var minDiffInBST = function(root) {
    let totalMin=Infinity;
    let prev=null
    function inOrder(node){
      if(node==null)return
      inOrder(node.left)
      if(prev){
        totalMin=Math.min(totalMin,Math.abs(prev.val-node.val))   
      }
      prev=node
      inOrder(node.right)
    }
    inOrder(root)
    return totalMin
  };