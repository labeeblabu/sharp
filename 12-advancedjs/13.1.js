Task Description
Go through the following video to understand hoisting in depth

https://www.youtube.com/watch?v=Fnlnw8uY6jo&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=4





Guess the Output and also write the reason for the answer (No reason means no marks)





QUESTION 1



var a = 3;



function printName(name){

console.log(name)

}



printName("YAVTECH");

console.log(a)





QUESTION 2



printName("YAVTECH");

console.log(a);



var a = 3;



function printName(name){

console.log(name)

}



QUESTION 3





console.log(printName);

console.log(a);



var a = 3;



var printName = (name) => {

console.log(name)

}







QUESTION 4



console.log(printName);

console.log(a);



var a = 3;



var printName = function (name) {

console.log(name)

}



QUESTION 5



console.log(printName);

console.log(a);



//commented var a=5



var printName = function (name) {

console.log(name)

}

Your Answer
1)

   YAVTECH (yav tech is in the function in javascript we can access the function even before we initialise it)

   3

2) 

    YAVTECH

    undefined(because in case of variable we cant access the variable even before we initialise it)

 3)

    undefined

    undefined  (in java script arrow function is consiered as a variable)

4)

   undefined

   undefined(only [function()] syntax can access even before we initiaise it)

5)

    undefined(only [function()] syntax can access even before we initiaise it)

    error(because a is not defined we didnt put any avlue in a)        (undefined and not defined isnt the same)