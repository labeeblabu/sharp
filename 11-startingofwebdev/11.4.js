// Next Permutation 
// Medium Accuracy: 54.7% Submissions: 32964 Points: 4
// Implement the next permutation, which rearranges the list of numbers into Lexicographically next greater permutation of list of numbers. If such arrangement is not possible, it must be rearranged to the lowest possible order i.e. sorted in an ascending order. You are given an list of numbers arr[ ] of size N.

// Example 1:

// Input: N = 6
// arr = {1, 2, 3, 6, 5, 4}
// Output: {1, 2, 4, 3, 5, 6}
// Explaination: The next permutation of the 
// given array is {1, 2, 4, 3, 5, 6}.
// Example 2:

// Input: N = 3
// arr = {3, 2, 1}
// Output: {1, 2, 3}
// Explaination: As arr[] is the last 
// permutation. So, the next permutation 
// is the lowest one.
// Your Task:
// You do not need to read input or print anything. Your task is to complete the function nextPermutation() which takes N and arr[ ] as input parameters and returns a list of numbers containing the next permutation.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)
class Solution {

    nextPermutation(arr,n){
  
      let ind1=-1
  
     for(let i=n-2;i>=0;i--){
  
       if(arr[i]<arr[i+1]){
  
         ind1=i
  
         break;
  
       }
  
     }
  
     if(ind1>=0){
  
     for(let j=n-1;j>=0;j--){
  
       if(arr[ind1]<arr[j]){
  
         let temp=arr[ind1]
  
         arr[ind1]=arr[j]
  
         arr[j]=temp
  
         break;
  
       }
  
       
  
     }
  
    }
  
     let first=ind1+1
  
       let last=n-1
  
       while(first<last){
  
         let temp=arr[first]
  
         arr[first]=arr[last]
  
         arr[last]=temp
  
         first++
  
         last--
  
       }
  
       return arr
  
    }
  
  }