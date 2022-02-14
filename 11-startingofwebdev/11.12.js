// Segregate even and odd nodes in a Link List 
// Easy Accuracy: 64.41% Submissions: 24775 Points: 2
// Given a link list of size N, modify the list such that all the even numbers appear before all the odd numbers in the modified list. The order of appearance of numbers within each segregation should be same as that in the original list.

// NOTE: Don't create a new linked list, instead rearrange the provided one.


// Example 1:

// Input: 
// N = 7
// Link List:
// 17 -> 15 -> 8 -> 9 -> 2 -> 4 -> 6 -> NULL

// Output: 8 2 4 6 17 15 9

// Explaination: 8,2,4,6 are the even numbers 
// so they appear first and 17,15,9 are odd 
// numbers that appear later.

// Example 2:

// Input:
// N = 4
// Link List:
// 1 -> 3 -> 5 -> 7

// Output: 1 3 5 7

// Explaination: There is no even number. 
// So ne need for modification.

// Your Task:
// You do not need to read input or print anything. Your task is to complete the function divide() which takes N and head of Link List as input parameters and returns the head of modified link list. Don't create a new linked list, instead rearrange the provided one.


// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

class Solution {
 divide(N,head){
     //code here
     let odd=null
     let even=null
     let o=null
     let e=null
        while(head){
       if(head.data%2==1){
         if(odd==null){
           odd=head
           o=head
         }else{
           o.next=head
           o=o.next
         }
       }else{
         if(even==null){
           even=head
           e=head
         }else{
           e.next=head
           e=e.next
         }
       }head=head.next
     }if(e){ e.next=odd}
     if(o){ o.next=null}
     if(even)return even
     return odd
    }
   }


//    Detect Loop in linked list 
// Easy Accuracy: 46.54% Submissions: 100k+ Points: 2
// Given a linked list of N nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

// Example 1:

// Input:
// N = 3
// value[] = {1,3,4}
// x = 2
// Output: True
// Explanation: In above test case N = 3.
// The linked list with nodes N = 3 is
// given. Then value of x=2 is given which
// means last node is connected with xth
// node of linked list. Therefore, there
// exists a loop.
// Example 2:

// Input:
// N = 4
// value[] = {1,8,3,4}
// x = 0
// Output: False
// Explanation: For N = 4 ,x = 0 means
// then lastNode->next = NULL, then
// the Linked list does not contains
// any loop.
// Your Task:
// The task is to complete the function detectloop() which contains reference to the head as only argument. This function should return true if linked list contains loop, else return false.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

class Solution {
    //Function to check if the linked list has a loop.
    detectLoop(head)
    {
        if(!head) 
            return false;
        //using two pointers and moving one pointer(slow) by one node and 
        //another pointer(fast) by two nodes in each iteration.
        let fast = head.next;
        let slow = head;
        while( fast !== slow)
        {
            //if the node pointed by first pointer(fast) or the node 
            //next to it is null, we return false.
            if( !fast || !fast.next )
            return false;
            fast = fast.next.next;
            slow = slow.next;
        }
        //if we reach here it means both the pointers fast and slow point to 
        //same node which shows the presence of loop so we return true.
        return true;
    }
}



// 876. Middle of the Linked List
// Easy

// 4615

// 115

// Add to List

// Share
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
var middleNode = function(head) {
    let len = 0;
      let current = head;
      while(current) {
        len++;
        current = current.next;
      }
      let mid = Math.floor(len/2);
      while(mid){
        head = head.next;
        mid--;
      }
        return head;
    };