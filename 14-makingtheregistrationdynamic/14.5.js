Task Description
Do you know what binary trees are?

Watch this video to revise trees

https://www.youtube.com/watch?v=H5JubkIy_p8&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=27



Now Understand what Binary Search tree is



https://www.youtube.com/watch?v=pYT9F8_LFTM&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=28



Go ahead and write down the code for implementing a BST in javascript using classes and objects



Deliverable

Implement Insert functionality
Implement Search Functionality
Push the code to git and upload commit ID


Try implementing the video without seeing the answer and see it once you have implemented it or if you are stuck



Answer:

https://www.youtube.com/watch?v=COZK7NATh4k&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=29

Your Answer
class Node{

    constructor(value){

        this.value = value;

        this.left=null

        this.right=null

    }

}

class BST{

    constructor(){

       this.root=null;

    }

    insert(value){

        let newNode=new Node(value);

        if (this.root==null) {

            this.root=newNode;

        }else{

            let current=this.root

            while (true) {

                if (value<current.value) {

                    if (current.left==null) {

                        current.left=newNode;

                        return this;

                    }else{

                        current=current.left;

                    }

                }else{

                    if (current.right==null) {

                        current.right=newNode;

                        return this;

                    }else{

                        current=current.right;

                    }

                }

            }

        }

    }

    contains(value){

        let current=this.root;

        while (current) {

            if (value<current.value) {

                current=current.left

            }else if(value>current.value){

                current=current.right

            }else{

                return true;

            }

        }

        return false;

    }

}



let tree=new BST()

tree.insert(10)

tree.insert(5)

tree.insert(2)

tree.insert(16)

tree.insert(13)

console.log(tree.contains(10));

console.log(tree.contains(20));

console.log(tree.contains(99));





function preOrder(node) {

    

    console.log(node.value);

    if (node.left) {

        preOrder(node.left)

    }

    if (node.right) {

        preOrder(node.right)

    }

}

function preOrder(root) {

    let stack=[]

    stack=[root]

    while (stack.length) {

        let node=stack.pop()

        console.log(node.value);

        if (node.left) {

            stack.push(node.left)

        }if (node.right) {

            stack.push(node.right)

        }

    }

}