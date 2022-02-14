// 234. Palindrome Linked List
// Easy

// 7885

// 503

// Add to List

// Share
// Given the head of a singly linked list, return true if it is a palindrome.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false

function isPalindrome(head) {
    let p=head
    let q=head
  while (p!==null&&p.next!==null) {
      p=p.next.next
      q=q.next
    }
    if(p!==null){
      q=q.next
    }
     q= reverse(q)
    p=head
      while (q!==null) {
      if (p.val!==q.val) {
        return false;
       } 
      p=p.next
      q=q.next  
    }
    return true
  } 
   function reverse(head) {
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
}