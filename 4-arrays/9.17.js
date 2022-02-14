// Write a program to sort the array in descending order using Selection sort algorithm. After Sorting return the array.

// Note both the array and size is already given.

// Input:-

// [4,3,2,5,1]



// Output:-

// [5,4,3,2,1]



// Click on submit after all the test-cases has passed.
var sortArray = function(nums) {
    let imin=0
    for(let i=0;i<nums.length;i++){
      imin=i
    for(let j=i+1;j<nums.length;j++){
      if(nums[j]<nums[imin]){
      imin=j
      }
    }
    [nums[i],nums[imin]]=[nums[imin],nums[i]]
    }
    return nums
    };