// Reverse a linked list
// Difficulty Level : Medium
 
// Given pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing the links between nodes.

// Examples: 

// Input: Head of following linked list 
// 1->2->3->4->NULL 
// Output: Linked list should be changed to, 
// 4->3->2->1->NULL

// Input: Head of following linked list 
// 1->2->3->4->5->NULL 
// Output: Linked list should be changed to, 
// 5->4->3->2->1->NULL

// Input: NULL 
// Output: NULL

// Input: 1->NULL 
// Output: 1->NULL 
 

// Recommended: Please solve it on “PRACTICE” first, before moving on to the solution.
// Iterative Method 

// Initialize three pointers prev as NULL, curr as head and next as NULL.
// Iterate through the linked list. In loop, do following. 
// // Before changing next of current, 
// // store next node 
// next = curr->next
// // Now change next of current 
// // This is where actual reversing happens 
// curr->next = prev 
// // Move prev and curr one step forward 
// prev = curr 
// curr = next
class Solution {
    //Function to reverse a linked list.
    reverseList(head)
    {
      //your code here
      let p=head
      let prev=null
      let next=null
      while(p){
        next=p.next
        p.next=prev
        prev=p
        p=next
      }
      return prev
    }
     }