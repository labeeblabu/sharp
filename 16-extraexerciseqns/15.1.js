1)  Special Stack 
    Easy Accuracy: 50.0% Submissions: 53753 Points: 2
    Design a data-structure SpecialStack that supports all the stack operations like push(), pop(), isEmpty(), isFull() and an additional operation getMin() which should return minimum element from the SpecialStack. Your task is to complete all the functions, using stack data-Structure.


Example 1:

Input:
Stack: 18 19 29 15 16
Output: 15
Explanation:
The minimum element of the stack is 15.
 


Your Task:
Since this is a function problem, you don't need to take inputs. You just have to complete 5 functions, push() which takes the stack and an integer x as input and pushes it into the stack; pop() which takes the stack as input and pops out the topmost element from the stack; isEmpty() which takes the stack as input and returns true/false depending upon whether the stack is empty or not; isFull() which takes the stack and the size of the stack as input and returns true/false depending upon whether the stack is full or not (depending upon the
given size); getMin() which takes the stack as input and returns the minimum element of the stack. 
Note: The output of the code will be the value returned by getMin() function.


Expected Time Complexity: O(N) for getMin, O(1) for remaining all 4 functions.
Expected Auxiliary Space: O(1) for all the 5 functions.
2)    Queue using two Stacks 
Easy Accuracy: 47.29% Submissions: 81796 Points: 2
Implement a Queue using 2 stacks s1 and s2 .
A Query Q is of 2 Types
(i) 1 x (a query of this type means  pushing 'x' into the queue)
(ii) 2   (a query of this type means to pop element from queue and print the poped element)

Example 1:

Input:
5
1 2 1 3 2 1 4 2

Output: 
2 3

Explanation: 
In the first testcase
1 2 the queue will be {2}
1 3 the queue will be {2 3}
2   poped element will be 2 the queue 
    will be {3}
1 4 the queue will be {3 4}
2   poped element will be 3.
Example 2:

Input:
4
1 2 2 2 1 4

Output: 
2 -1

Explanation: 
In the second testcase 
1 2 the queue will be {2}
2   poped element will be 2 and 
    then the queue will be empty
2   the queue is empty and hence -1
1 4 the queue will be {4}.
Your Task:
You are required to complete the two methods push which take one argument an integer 'x' to be pushed into the queue and pop which returns a integer poped out from other queue(-1 if the queue is empty). The printing is done automatically by the driver code.

Expected Time Complexity : O(1) for push() and O(N) for pop() or O(N) for push() and O(1) for pop()  
Expected Auxilliary Space : O(1).

3)  Implement Stack and Queue using Deque
4)Check for BST 
Easy Accuracy: 21.58% Submissions: 100k+ Points: 2
Given the root of a binary tree. Check whether it is a BST or not.
Note: We are considering that BSTs can not contain duplicate Nodes.
A BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

Input:
   2
 /    \
1      3
Output: 1 
Explanation: 
The left subtree of root node contains node
with key lesser than the root nodes key and 
the right subtree of root node contains node 
with key greater than the root nodes key.
Hence, the tree is a BST.
Example 2:

Input:
  2
   \
    7
     \
      6
       \
        5
         \
          9
           \
            2
             \
              6
Output: 0 
Explanation: 
Since the node with value 7 has right subtree 
nodes with keys less than 7, this is not a BST.
Your Task:
You don't need to read input or print anything. Your task is to complete the function isBST() which takes the root of the tree as a parameter and returns true if the given binary tree is BST, else returns false. 

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(Height of the BST).
5)Find min and max element in a BST



Watch this video

https://www.youtube.com/watch?v=Ut90klNN264&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=31





Deliverable

Write the code in Javascript and push the code to git and upload commit ID.
6)Merge Two Balanced Binary Search Trees/Task Description
Merge two BST
 <script>

// JavaScript program to Merge Two
// Balanced Binary Search Trees
// A binary tree node
class Node {
    constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
    }
}

class BinarySearchTree {
    // Constructor
    constructor() {
    this.root = null;
    }

    // Inorder traversal of the tree
    inorder() {
    this.inorderUtil(this.root);
    }

    // Utility function for inorder traversal of the tree
    inorderUtil(node) {
    if (node == null) {
        return;
    }

    this.inorderUtil(node.left);
    document.write(node.data + " ");
    this.inorderUtil(node.right);
    }

    // A Utility Method that stores
    // inorder traversal of a tree
    storeInorderUtil(node, list) {
    if (node == null) {
        return list;
    }

    //recur on the left child
    this.storeInorderUtil(node.left, list);

    // Adds data to the list
    list.push(node.data);

    //recur on the right child
    this.storeInorderUtil(node.right, list);

    return list;
    }

    // Method that stores inorder traversal of a tree
    storeInorder(node) {
    var list1 = [];
    var list2 = this.storeInorderUtil(node, list1);
    return list2;
    }

    // Method that merges two ArrayLists into one.
    merge(list1, list2, m, n) {
    // list3 will contain the merge of list1 and list2
    var list3 = [];
    var i = 0;
    var j = 0;

    //Traversing through both ArrayLists
    while (i < m && j < n) {
        // Smaller one goes into list3
        if (list1[i] < list2[j]) {
        list3.push(list1[i]);
        i++;
        } else {
        list3.push(list2[j]);
        j++;
        }
    }

    // Adds the remaining elements of list1 into list3
    while (i < m) {
        list3.push(list1[i]);
        i++;
    }

    // Adds the remaining elements of list2 into list3
    while (j < n) {
        list3.push(list2[j]);
        j++;
    }
    return list3;
    }

    // Method that converts an ArrayList to a BST
    ALtoBST(list, start, end) {
    // Base case
    if (start > end) {
        return null;
    }

    // Get the middle element and make it root
    var mid = parseInt((start + end) / 2);
    var node = new Node(list[mid]);

    /* Recursively construct the left subtree and make it
    left child of root */
    node.left = this.ALtoBST(list, start, mid - 1);

    /* Recursively construct the right subtree and make it
    right child of root */
    node.right = this.ALtoBST(list, mid + 1, end);

    return node;
    }

    // Method that merges two trees into a single one.
    mergeTrees(node1, node2) {
    //Stores Inorder of tree1 to list1
    var list1 = this.storeInorder(node1);

    //Stores Inorder of tree2 to list2
    var list2 = this.storeInorder(node2);

    // Merges both list1 and list2 into list3
    var list3 =
    this.merge(list1, list2, list1.length, list2.length);

    //Eventually converts the merged list into resultant BST
    var node = this.ALtoBST(list3, 0, list3.length - 1);
    return node;
    }
}
// Driver function
/* Creating following tree as First balanced BST
            100
            / \
            50 300
            / \
        20 70
    */

var tree1 = new BinarySearchTree();
tree1.root = new Node(100);
tree1.root.left = new Node(50);
tree1.root.right = new Node(300);
tree1.root.left.left = new Node(20);
tree1.root.left.right = new Node(70);

/* Creating following tree as second balanced BST
            80
            / \
        40 120
    */

var tree2 = new BinarySearchTree();
tree2.root = new Node(80);
tree2.root.left = new Node(40);
tree2.root.right = new Node(120);

var tree = new BinarySearchTree();
tree.root = tree.mergeTrees(tree1.root, tree2.root);
document.write(
"Following is Inorder traversal of the merged tree <br>"
);
tree.inorder();

</script>
