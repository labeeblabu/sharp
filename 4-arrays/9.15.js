// Write a program to sort the array in descending order using Bubble sort algorithm. After Sorting return the array.

// Note both the array and size is already given.

// Input:-

// [4,3,2,5,1]



// Output:-

// [5,4,3,2,1]

var sortArray = function(nums) {
    for(let i=0;i<nums.length;i++){
      for(let j=0;j<nums.length-1;j++){
        if(nums[j]>nums[j+1]){
          [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
        }
      }
    }
    return nums
    };