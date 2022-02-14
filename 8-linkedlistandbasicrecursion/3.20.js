// Write a program to print all the subsequence of an array.

// All subsequence of an array [1,2,3]

// [1]

// [1,2]

// [1,2,3]

// [1,3]

// [2]

// [2,3]

// [3]



// (Solve the questions in your own compiler and then copy paste your code on your student dashboard and then click submit )
//imp one
function printSubseq(arr,index,subarr) {
    if (index==arr.length) {
      if (subarr.length!=0){
        console.log(subarr)
      }
    }
  else{
      printSubseq(arr,index+1,subarr)
      printSubseq(arr,index+1,subarr+[arr[index]])
    }
    return
  }
  arr=[1,2,3]
  printSubseq(arr,0,[])