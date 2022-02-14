// 42. Trapping Rain Water
// Hard

// 16633

// 235

// Add to List

// Share
// Given n non-negative integers representing an elevation map where the width of each bar is 1,
//  compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
var trap = function(height) {
    let left = 0, right = height.length - 1, total = 0, maxL = 0, maxR = 0
    while (right > left){
      if (height[left] <= height[right]){
        height[left] >= maxL ? maxL = height[left] : total += maxL - height[left];
        left++
      } else {
        height[right] >= maxR ? maxR = height[right] : total += maxR - height[right];
        right--
      }
    }
    return total
  }