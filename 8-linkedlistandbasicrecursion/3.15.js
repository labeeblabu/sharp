// Write a question to to take an input n and print all the multiples of 5 less than n in a recursive way.



// example input n=30

// output 1 5 10 15 20 25
let i=1;

function count(i,n=50) {

  if (i*5>=n) {

    return;

  }else{

    if (i==1) {

      console.log(i)

    }

     console.log(i*5)

  count(i+1)

      }

   }