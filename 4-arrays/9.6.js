// Watch the following video to understand about prime numbers and how to store them :- Video_Link



// After watching the video solve the following Question :-



// Write a program to store first n prime numbers in an array . After storing return the array.﻿



// Input:-

// 5

// Output:- Return the output in the form of an array.

// 1

// 3

// 5

// 7

// 11
// https://www.youtube.com/watch?v=j85_kioT8Hs



let a=[]
let count=1
let n=2
while(count<=20){
    let i=2
    flag=true
    while(i<n){
        if(n%i==0){
            flag=false
        }
        i++
    }
    if(flag){
        a.push(n)
        count++
    }
    else{
    }
    n++
}
console.log(a);
