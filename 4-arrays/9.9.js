// Given an array find the maximum sum subarray. Return the maximum sum of the subarray.

// Input:-

// [5,2,-4,-5, 3,-1,2,3,1]

// Output:-

// 8

// Reason :- 3,-1,2,3,1 is the maximum subarray possible.


let a=[1,2,3,4,5]
let sum=0
let lastsum=0
for(let i=0;i<a.length;i++){
  for(let j=i;j<a.length;j++){
    for(let k=i;k<=j;k++){
      console.log();(a[k]);
      sum=sum+a[k]
      if(sum>lastsum){
        lastsum=sum
      }
    }
      sum=0
  }
}
console.log(lastsum);

