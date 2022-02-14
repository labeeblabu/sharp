Task Description
Watch this video

https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=10



What will be the output of the following?



1)

var a = 50;



{

var a =30;

let b = 20;

let c = 30;

}



console.log(a)



2)



const a = 50;



{

var a =30;

let b = 20;

let c = 30;

}



console.log(a)



3)



let a = 50;



{

var a =30;

let b = 20;

let c = 30;

}



console.log(a)



4) (THINK SMARTLY BEFORE ANSWERING THIS)



var a = 50;



function fun(){

var a =30;

let b = 20;

let c = 30;

}

fun();

console.log(a)



5)



let a = 50;



function fun(){

var a =30;

let b = 20;

let c = 30;

}

fun();

console.log(a)





6)



const a = 10;

{

var a = 10;

}

console.log(a)





7)



const a = 10;

{

const a = 20;

{

const a = 50;

console.log(a);

}

console.log(a)

}

console.log(a)



8)



const a = 10;

{

const a = 20;

{

console.log(a);

}

console.log(a)

}

console.log(a)



9) Explain what did you understand by lexical scope in your own words

Your Answer
1)     30 (var is glboal )



2)     syntax error a has been already declared (const ,we can declare ony once)



3)     syntax error a has been already declared (let ,we can declare only once) 



4)     50 (var is functional scoped and we only calling the function ,outside the function we call a so global a 50 is prnted)



5)    50(var is functional scoped)



6)    syntax erroe a has been already declared (var is not block scoped ,we can use cost only once )



7)    50 (const is block scoped)

       20(const is block scoped)

       10(const is block scoped)



8)    20

       20    (const is block scoped and due to lexical scoping)

       10



9)     an item's lexical scope is the place in which the item got createdd