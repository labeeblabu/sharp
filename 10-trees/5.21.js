// 889. Construct Binary Tree from Preorder and Postorder Traversal
// Medium

// 1738

// 80

// Add to List

// Share
// Given two integer arrays, preorder and postorder where preorder is the preorder traversal of a binary tree of distinct values and postorder is the postorder traversal of the same tree, reconstruct and return the binary tree.

// If there exist multiple answers, you can return any of them.

 

// Example 1:


// Input: preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
// Output: [1,2,3,4,5,6,7]
// Example 2:

// Input: preorder = [1], postorder = [1]
// Output: [1]
var constructFromPrePost = function(pre, pos) {
    return treeBuild(0,pre.length-1,0,pos.length-1)
    function treeBuild(preStart,preEnd,posStart,posEnd){
      if(preStart>preEnd)return null
      const root=new TreeNode(pre[preStart])
      if(preStart===preEnd)return root
      const leftVal=pre[preStart+1]
      let posIndex;
      for(posIndex=posStart; posIndex<=posEnd;posIndex++){
        if(pos[posIndex]===leftVal)break;   
      }
      const posLength =posIndex-posStart
      const preLeftStart=preStart+1
      const preLeftEnd=preLeftStart+posLength
      const posLeftStart=posStart
      const posLeftEnd=posIndex
      const preRightStart=preLeftEnd+1
      const preRightEnd=preEnd
      const posRightStart=posLeftEnd+1
      const posRightEnd=posEnd-1
      root.left= treeBuild(preLeftStart,preLeftEnd,posLeftStart,posLeftEnd)
      root.right=treeBuild(preRightStart,preRightEnd,posRightStart,posRightEnd)
      return root
    }
  };