// 19. Remove Nth Node From End of List
// Medium

// 8747

// 414

// Add to List

// Share
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

var removeNthFromEnd = function (head, n) {
    let p = head;
    let q = head;
    let prev=null
    let cnt = 1;
    while (cnt <= n - 1) {
      q = q.next;
      cnt++;
    }
    while (q.next) {
      prev=p
      p = p.next;
      q = q.next;
    }
    prev.next=q
    p.next=null;
    return head
  };