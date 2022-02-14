// Understand Continue from this video :- Link  and solve the question using continue jumping statement.

// Write a program to print even numbers from 1 to n except numbers which are divisible by 4. 

// Use Continue statement to avoid printing.

// https://www.youtube.com/watch?v=VJnSheKQc4U



// Input

// 10

// Output

// 2

// 6

// 10
for(var x=1;x<=100;x++){
    if(x%4==0){
    continue
    }
    console.log(x)
}