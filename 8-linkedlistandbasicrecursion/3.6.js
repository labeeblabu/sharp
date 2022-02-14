// 206. Reverse Linked List
// Easy

// 10521

// 181

// Add to List

// Share
// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

var reverseList = function(head) {
    let p=head
  let prev=null
  let next;
  while (p) {
    next=p.next
    p.next=prev
    prev=p
    p=next
  }
  return prev
};

