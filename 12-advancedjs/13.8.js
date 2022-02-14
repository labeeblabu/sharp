Task Description
Watch this video for reference and answer the following questions



https://www.youtube.com/watch?v=eBTBG4nda2A&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=13





Questions





1)

function y(){



setTimeout(() => console.log(a), 1000)

console.log('Done Coding')



}

y();



Explain how you got the answer



2)

function y(){



setTimeout(() => console.log(a), 0)

console.log('Done Coding')



}

y();



Explain how you got the answer



3)

function y(){



for(var i=1;i<6;i++){

setTimeout(() => console.log(i ), i * 1000)

}

console.log('Done Coding')



}

y();



Explain how you got the answer



4)

function y(){



for(let i=1;i<6;i++){

setTimeout(() => console.log(i ), i * 1000)

}

console.log('Done Coding')



}

y();



Explain how you got the answer

Your Answer
1)   done coding

       reference error a is not defined ( bcoz we set time on the error line so it moves to next line and prints after the time is out it goes to the line )



2)   done coding 

       reference error a is not defined (we set the timw 0 even though it prints later coz we called it)



3)   done coding   ( it behaving like ths bcoz of closure function remebers its refernce to i (not the value)  js not wait for the time for expire)

       6

       6

       6 

       6

       6



4)   done coding   (let has a block scope ie whwenever the loop iterates the i is a new variable)

       1

       2

       3

       4

       5