// Write a program to write a function factorial which takes an input n and prints the factorial of the number in a recursive way

// Example :- n=5;

// Output = 1*2*3*4*5 = 120
let i=1

function rec(i,n) {

  if (i>n) {

    return 1

  }

  return i*rec(i+1,n)

}