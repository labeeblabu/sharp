// Write a program to convert the following program in bold into its recursive format.



// Iterative Code :-

// int sum =0;

// int n=5;

// for(int i=0;i<10;i=i+2)

// {

// if(i==n)

// {

// break;

// }

// sum =sum+i;

// }

// System.out.println(sum);



// Convert it into recursive format and copy paste your answer here

let i=0;
let sumr=0;
function rec(i) {
  if (i==5) {
    return;
  }
  if (i>=10) {
   return 0
  }
  sumr=i+rec(i+2)
   return sumr
   }
console.log(`recursive`,rec(i))