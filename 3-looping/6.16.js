// Print the following pattern using for loop

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

for(let i=0;i<=5;i++){
    for(let j=5-i;j>=1;j--){
       document.write("*")
    }
    document.write(`<br>`)
    }
    for(let k=0;k<5;k++){
        for(let l=0;l<=k;l++){
           document.write("*")
        }
        document.write(`<br>`)
        }