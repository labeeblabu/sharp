// Write a recursive program to find all the permutations of a string and store it in a list or arraylist or vectors.

// Example:-

// Permutation for abc

// abc,acb, bac, bca, cab ,cba

// imp one
let str=`abc`
let n=str.length-1
let result=[]
function permute(str,l,r) {
  if (l==r) {
    result.push(str)
  }else{
    for (let i=l;i<=r;i++) {
      str= swap(str,l,i)
      permute(str,l+1,r)
      str= swap(str,l,i)
    }
  }
  return result
}
function swap(str,l,i) {
  let array=str.split(``)
  let temp=array[l]
  array[l]=array[i]
  array[i]=temp
     return array.join('')
}