// 203. Remove Linked List Elements
// Easy

// 4439

// 154

// Add to List

// Share
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []
var removeElements = function(head, val) {
    while(head&&head.val==val){
           head=head.next 
   }
        let p=head
     while (p&&p.next) {
       if (p.next.val==val) {
    let temp=p.next.next
  p.next=temp
  }else{p=p.next}
               }
  return head   
};