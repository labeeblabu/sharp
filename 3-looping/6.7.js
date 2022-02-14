// Write a program to return the reverse of a number

// Input

// 123

// output

// 321
let a=235
let last=0
let reverse=0
while(a>0){
    last=a%10
    reverse=(reverse*10)+last
    a=parseInt(a/10)
}
console.log(reverse)