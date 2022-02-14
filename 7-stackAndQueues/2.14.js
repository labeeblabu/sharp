// 622. Design Circular Queue
// Medium

// 1527

// 159

// Add to List

// Share
// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

// One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

// Implementation the MyCircularQueue class:

// MyCircularQueue(k) Initializes the object with the size of the queue to be k.
// int Front() Gets the front item from the queue. If the queue is empty, return -1.
// int Rear() Gets the last item from the queue. If the queue is empty, return -1.
// boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
// boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
// boolean isEmpty() Checks whether the circular queue is empty or not.
// boolean isFull() Checks whether the circular queue is full or not.
// You must solve the problem without using the built-in queue data structure in your programming language. 

 

// Example 1:

// Input
// ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
// [[3], [1], [2], [3], [4], [], [], [], [4], []]
// Output
// [null, true, true, true, false, 3, true, true, true, 4]

// Explanation
// MyCircularQueue myCircularQueue = new MyCircularQueue(3);
// myCircularQueue.enQueue(1); // return True
// myCircularQueue.enQueue(2); // return True
// myCircularQueue.enQueue(3); // return True
// myCircularQueue.enQueue(4); // return False
// myCircularQueue.Rear();     // return 3
// myCircularQueue.isFull();   // return True
// myCircularQueue.deQueue();  // return True
// myCircularQueue.enQueue(4); // return True
// myCircularQueue.Rear();     // return 4

var MyCircularQueue = function(k) {
    this.capacity=k
   this.arr=new Array(k).fill(null)
     this.head=0
 this.tail=0
   };
   MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
     return false
     }
     this.arr[this.tail]=value
   this.tail=(this.tail+1)%this.capacity
    return true 
  };
   MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
  return false
     }
     this.arr[this.head]=null
     this.head=(this.head+1)%this.capacity
    return true
   };
   MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
     return -1
     }
     return this.arr[this.head]
   };
   MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
     return -1
     }
     return this.arr[(this.tail+this.capacity-1)%this.capacity]
   };
     MyCircularQueue.prototype.isEmpty = function() {
    return this.head==this.tail&&this.arr[this.head]===null   
   };
   MyCircularQueue.prototype.isFull = function() {
    return this.head==this.tail&&this.arr[this.head]!==null
   };

   //or

   function Node(val = 0) {
    return {
      val,
      next: null,
      prev: null,
    };
  }
  class MyCircularQueue {
      constructor(k) {
          this.root = null;
          this.tail = null;
          this.max= k
          this.length = 0;
      } 
  
      enQueue(val) {
           if(this.length===this.max){
                  return false
              }
      const newNode = new Node(val);
      if (!this.root) {
        this.root = newNode;
        this.tail = newNode;
      }
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
          this.length++;
          return true
      }
      deQueue() {
             
      if (this.length===0) {
        return false;
      }
      const remNode = this.root;
      if (this.length === 1) {
        this.root = null;
        this.tail = null;
      } else {
        this.root = this.root.next;
        this.root.prev = null;
        remNode.next = null;
      }
      this.length--;
      return true;
      }
  
      Front() {
          return this.root?this.root.val:-1;
      }
      
      Rear(){
          return this.tail?this.tail.val:-1
      }
      isEmpty(){
          return this.length===0
      }
      isFull(){
          return this.max===this.length
      }
      
  }

