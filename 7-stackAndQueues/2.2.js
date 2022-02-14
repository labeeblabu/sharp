// 155. Min Stack
// Easy

// 7302

// 581

// Add to List

// Share
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2


var MinStack = function() {
    this.stack = []
    };

    MinStack.prototype.push = function(x) {
    let min = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].min
    this.stack.push({val: x, min: Math.min(min, x)})
    };
   
    MinStack.prototype.pop = function() {
    if(this.stack.length > 0){
    this.stack.pop()
    }
    };

    MinStack.prototype.top = function() {
    if(this.stack.length > 0) {
    return this.stack[this.stack.length - 1].val
    }
    };

    MinStack.prototype.getMin = function() {
    if(this.stack.length > 0) {
    return this.stack[this.stack.length - 1].min
    }
    };    

    //or      
    class MinStack {
        constructor() {
            this.stack = [];
            this.minStack = [];
        }
        push(val) { // O(1)
            if(!this.minStack.length) {
                this.minStack.push(val);
            } else if(this.minStack[this.minStack.length - 1] > val) {
                this.minStack.push(val);
            } else {
                this.minStack.push(this.minStack[this.minStack.length - 1]);
            }
            this.stack.push(val);
        }
        pop() { // O(1)
            this.stack.pop();
            this.minStack.pop();
        }
        top() { // O(1)
            return this.stack[this.stack.length - 1];
        }
        getMin() {  // O(1)
            return this.minStack[this.minStack.length - 1];
        }
    }