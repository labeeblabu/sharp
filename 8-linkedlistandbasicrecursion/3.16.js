// Write a function which will take the input n from the user and return back an integer which will contain the sum of n natural number .

// Example input n=5



// return 1+2+3+4+5 = 15 will be returned back from the function
let i=0;

function rec(i,n) {

  if (i>n) {

    return 0

  }

  return i +rec(i+1,n)

}