// 898. Bitwise ORs of Subarrays
// Medium

// 906

// 173

// Add to List

// Share
// We have an array arr of non-negative integers.

// For every (contiguous) subarray sub = [arr[i], arr[i + 1], ..., arr[j]] (with i <= j), 
// we take the bitwise OR of all the elements in sub, obtaining a result arr[i] | arr[i + 1] | ... | arr[j].

// Return the number of possible results. Results that occur more than once are only counted once 
// in the final answer

 

// Example 1:

// Input: arr = [0]
// Output: 1
// Explanation: There is only one possible result: 0.
// Example 2:

// Input: arr = [1,1,2]
// Output: 3
// Explanation: The possible subarrays are [1], [1], [2], [1, 1], [1, 2], [1, 1, 2].
// These yield the results 1, 1, 2, 1, 3, 3.
// There are 3 unique values, so the answer is 3.
// Example 3:

// Input: arr = [1,2,4]
// Output: 6
// Explanation: The possible results are 1, 2, 3, 4, 6, and 7.
const subarrayBitwiseORs = (a) => {
    let res = new Set(), cur = new Set();
    for (const x of a) {
        let t = new Set([x]);
        for (const y of cur) t.add(x | y); // get the each or  with t.size <= 32
        cur = t;
        for (const y of cur) res.add(y);
    }
    return res.size;
};
//or 
var subarrayBitwiseORs = function(arr) {
    let orSet = new Set();
    let currSet = new Set()
    currSet.add(0)
    for(let ele of arr){
        let tempSet = new Set()
        for(let ele1 of currSet){
            tempSet.add(ele1 | ele)
        }
        tempSet.add(ele)
        currSet = new Set(tempSet)
        currSet.forEach(curr => orSet.add(curr))
    }
    return orSet.size
};