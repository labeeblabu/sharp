// 912. Sort an Array
// Medium

// 1779

// 491

// Add to List

// Share
// Given an array of integers nums, sort the array in ascending order.

 

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
function sortArray(nums) {
 let arr=nums
    function merge(arr,l,mid,r) {
     let n1=mid-l+1
     let n2=r-mid
     let L=new Array(n1)
     let R=new Array(n2)
     for(let i=0;i<n1;i++){
      L[i]=arr[l+i]
     }
     for(let j=0;j<n2;j++){
      R[j]=arr[mid+1+j]
     }
     i=0
     j=0
     let k=l
     while (i<n1&&j<n2) {
      if (L[i]<R[j]) {
       arr[k]=L[i]
       i++
      }else{
      arr[k]=R[j]
       j++
      }
      k++
     }
     while (i<n1) {
      arr[k]=L[i]
      i++
      k++
     }
     while (j<n2) {
    arr[k]=R[j]
      j++
      k++
     }
    }
    function mergeSort(arr,l,r) {
     if (l>=r) {
     return
     }
     let mid=l+parseInt((r-l)/2)
     mergeSort(arr,l,mid)
     mergeSort(arr,mid+1,r)
     merge(arr,l,mid,r)
    }
   mergeSort(arr,0,arr.length-1)
     return arr
   }