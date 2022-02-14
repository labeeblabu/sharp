// 503. Next Greater Element II
// Medium

// 4017

// 122

// Add to List

// Share
// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]),
//  return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in 
// the array, which means you could search circularly to find its next greater number. If it doesn't 
// exist, return -1 for this number.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number. 
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]

var nextGreaterElements = function(nums) {
  let stack=[]
    let mymap= new Map()
    let solu=[]
    let j=0
    for(let i=0;i<nums.length;i++){
      while(stack.length>0&&nums[i]>nums[stack[stack.length-1]]){
        solu[stack.pop()]=nums[i]
      }
      stack.push(i)
    }
    for(let i=0; i<nums.length;i++){
      while(stack.length>0&&nums[i]>nums[stack[stack.length-1]]){
        solu[stack.pop()]=nums[i]
      }
    }
    while(stack.length>0){
      solu[stack.pop()]=-1
    }
      return solu
  };