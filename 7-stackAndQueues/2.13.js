// Create a class Queue and implement the following operations to create a Queue from scratch 



// Enqueue
// Dequeue
// is_empty
// get_first_element - element present in the front of the Queue from scratch.
class Queue{
    constructor(){
      this.storage=[]
    }
    enqueue(val){
      this.storage.push(val)
    }
    dequeue(){
     this.storage.shift()
    }
    is_empty(){
      return !this.storage.length
    }
  get_first_element(){
      return this.storage[0]
    }
  }
  let obj=new Queue()
  obj.enqueue(10)
  obj.enqueue(20)
  obj.enqueue(30)
  obj.dequeue()
  console.log(obj.is_empty())
  console.log(obj.get_first_element())
  obj.dequeue()
  obj.dequeue()
 console.log(obj.is_empty())
