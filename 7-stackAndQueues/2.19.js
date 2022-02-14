// 862. Shortest Subarray with Sum at Least K
// Hard

// 2639

// 66

// Add to List

// Share
// Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.

// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [1], k = 1
// Output: 1
// Example 2:

// Input: nums = [1,2], k = 4
// Output: -1
// Example 3:

// Input: nums = [2,-1,2], k = 3
// Output: 3

var shortestSubarray = function(nums, k) {
    let a=nums
    let sum=[];
   sum[0]=0
   let min=Number.MAX_SAFE_INTEGER
   let deque=[]
   for (let i=0;i<a.length;i++){
    sum[i+1]=sum[i]+a[i]
   }
   for(let i=0;i<sum.length;i++){
    while (deque.length&&sum[i]<=sum[deque[deque.length-1]]) {
     deque.pop()
    }
    while (deque.length&&sum[i]-sum[deque[0]]>=k) {
     min=Math.min(min,i-deque.shift())
    }
    deque.push(i)
   }return min===Number.MAX_SAFE_INTEGER?-1:min
   };