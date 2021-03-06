
// Different Bits Sum Pairwise
// Medium
// 102
// 6
// Add to favorites
// Asked In:
// GOOGLE
// We define f(X, Y) as number of different corresponding bits in binary representation of X and Y. For example, f(2, 7) = 2, since binary representation of 2 and 7 are 010 and 111, respectively. The first and the third bit differ, so f(2, 7) = 2.

// You are given an array of N positive integers, A1, A2 ,…, AN. Find sum of f(Ai, Aj) for all pairs (i, j) such that 1 ≤ i, j ≤ N. Return the answer modulo 109+7.

// For example,

// A=[1, 3, 5]

// We return

// f(1, 1) + f(1, 3) + f(1, 5) + 
// f(3, 1) + f(3, 3) + f(3, 5) +
// f(5, 1) + f(5, 3) + f(5, 5) =

// 0 + 1 + 1 +
// 1 + 0 + 2 +
// 1 + 2 + 0 = 8
// Note:You only need to implement the given function. Do not read input, instead use the arguments to the function. Do not print the output, instead return values as specified. Still have a doubt? Checkout Sample Codes for more details.

   let a=A
   let ans=0
   let count0=0
   let count1=0
   for(let i=0;i<31;i++){
       count0=0
       count1=0
       for(let j=0;j<a.length;j++){
           if((a[j]&(1<<i))===0){
               count0++
           }else{
               count1++
           }
       }ans+=2*count1*count0
       ans%=1000000007
   }
   return(ans)
       }
   };