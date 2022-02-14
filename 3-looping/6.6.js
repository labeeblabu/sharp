// Task Description
// Write a program to print whether a given number is an Armstrong number or not..

// (Armstrong number is a number in which all the sum of cubes of digits is equal to the number

// Example:-

// Input

// 153

// Output

// true



// Logic - 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 1 +125 + 27 = 153 which is equal to the original number )



// Input

// 123

// Output

// false



// Logic - 123 is not an Armstrong number because 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36 which is not equal to the original number )

let n=1
let a=0
let b=0
let c=0
while(n<1000){
    a=n%10
    b=(parseInt(n/10))%10
    c=(parseInt(n/100))
    if(n==(a**3+b**3+c**3))
    {
        console.log(a**3+b**3+c**3)
    }
n=n+1
}

