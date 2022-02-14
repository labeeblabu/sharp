// Top View of Binary Tree 
// Medium Accuracy: 32.3% Submissions: 100k+ Points: 4
// Given below is a binary tree. The task is to print the top view of binary tree. Top view of a binary tree is the set of nodes visible when the tree is viewed from the top. For the given below tree

//        1
//     /     \
//    2       3
//   /  \    /   \
// 4    5  6   7

// Top view will be: 4 2 1 3 7
// Note: Return nodes from leftmost node to rightmost node.

// Example 1:

// Input:
//       1
//    /    \
//   2      3
// Output: 2 1 3
// Example 2:

// Input:
//        10
//     /      \
//   20        30
//  /   \    /    \
// 40   60  90    100
// Output: 40 20 10 30 100
// Your Task:
// Since this is a function problem. You don't have to take input. Just complete the function topView() that takes root node as parameter and returns a list of nodes visible from the top view from left to right.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N).
class Solution
{
  topView(root)
  {
    var ans = [];
  if(root === null){
      console.log();
      return ans;
    }
   let temp = null;
    let q = [];
    let start_q = 0;
      let mp = new Map();
     q.push([root, 0]);
     while(q.length !== start_q)
    {
      temp = q[start_q][0];
      let d = q[start_q][1];
      start_q++;
       if(!mp.has(d)){
        mp.set(d, temp.data);
      }
  if(temp.left){
        q.push([temp.left, d-1]);
      }
    if(temp.right){
        q.push([temp.right, d+1]);
      }
    }
     let entri = mp.entries();
     let list = [];
     for(var ele of entri)
      list.push(ele); 
   list.sort(function (a, b) {
          if(a[0] == b[0])
            return a[1] - b[1];
          return a[0] - b[0];
        });
for(let i=0; i<list.length; i++){
      ans.push(list[i][1]);
    }
    return ans;
  }
}