// Write a program to sort the array in ascending order using Insertion sort algorithm. After Sorting return the array.

// Note both the array and size is already given.

// Input:-

// [4,3,2,5,1]



// Output:-

// [1,2,3,4,5]

var sortArray = function(nums) {
    let value=0
    let hole=0
    for(let i=1;i<nums.length;i++){
      value=nums[i]
      hole=i
      while(hole>0 && value<nums[hole-1]){
        nums[hole]=nums[hole-1]
        hole=hole-1
      }
      nums[hole]=value
    }
    return nums
    };