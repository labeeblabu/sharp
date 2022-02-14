// 61. Rotate List
// Medium

// 3980

// 1233

// Add to List

// Share
// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

function rotateRight(head,k) {
  if(!head||!head.next){return head}
    let q=head
    let len=1
    while (q.next) {
      q=q.next
      len++
    }
    q.next=head
    k=k%len
    k=len-k
    while (k>0) {
      q=q.next
      k--
    }
    head=q.next
    q.next=null
    return head
  }