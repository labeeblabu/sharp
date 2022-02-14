// Print the following pattern using while loop



// *****

// ****

// ***

// **

// *

// *

// **

// ***

// ****

// *****


let i=0
while(i<=5){
let j=5-i
while(j>=1){
document.write("*")
  j--
}
document.write(`<br>` )
 i++
}
let k=0
while(k<=5){
   let j=0
   while(j<=k){
      document.write("*")
      j++
   }
   document.write(`<br>` )
    k++
}