// 863. All Nodes Distance K in Binary Tree
// Medium

// 5619

// 117

// Add to List

// Share
// Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

// You can return the answer in any order.

 

// Example 1:


// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// Output: [7,4,1]
// Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
// Example 2:

// Input: root = [1], target = 1, k = 3
// Output: []
var distanceK = function(root, target, K) {
 if(!root) return []
    const node = rec(root, null, target)  
    const res = []
    find(node, K, res)
    return res
   };
   function rec(root, parent, target){
    if(!root) return null
    root.parent = parent
     if(root === target){   
     return root 
    }   
    return rec(root.left, root, target) || rec(root.right, root, target)   
   }
   function find(root, k, res){
    if(!root || root.visited) return res
    if(k == 0){
     res.push(root.val)
     return res
    }  
    root.visited = true
    find(root.left, k-1, res)
    find(root.right, k-1, res)
    find(root.parent, k-1, res)
    return res
   };