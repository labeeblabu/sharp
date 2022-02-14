Task Description
Go through this video to understand how the windows object and this works



https://www.youtube.com/watch?v=QCRpVw2KXf8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=6



QUESTION 1



What will be the output of the following (Also write the reason for the answer)



var a = 2;

var c = 2;



function b(){

var x = 2;

var c = 4

console.log(c)

}



console.log(a);

console.log(this.a);

console.log(this.c)

console.log(this.x)

console.log(window.a)

console.log(window.x)

console.lof(b());





QUESTION 2



For solving the following questions, first understand how lexical scoping works

Watch this video

https://www.youtube.com/watch?v=uH-tVP8MUs8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=8





Find the output and write the reason 



function abc() {

console.log(a);

}



var a = 7;

abc();



QUESTION 3



Find the output and write the reason 



function abc() {

console.log(a);

}



abc();

var a = 7;



QUESTION 4



Find the output and write the reason 



function outerfunction() {

console.log(a);

var c = 10;



innerfunction();



function innerfunction() {

console.log(b);

console.log(c);

}

}



var a = 7;

var b =3



outerfunction();





QUESTION 5



Find the output and write the reason 



function outerfunction() {

console.log(a);

var a = 10;



innerfunction();



function innerfunction() {

console.log(a);

console.log(window.a);

console.log(this.a)

}

}



var a = 7;

var b =3



outerfunction();



This question is a little tricky, please go through this video to understand how things work https://youtu.be/pKHgi3sgk4Q

Your Answer
1) 2(just console log a)

    undefined( a isnt inside the function) var is functional scoped

    undefined(c isnt inside the function) var is functional scoped

    undefined(x is declared but its value is never read we arent calling it )

    undefined( a isnt inside the function)

    undefined

    4 (calling function so consol log c)

    undefined

2) 7 (due to lexical environment a is not in there so moved to its parent ie global)

3) undefined (we declared a after calling the functon)

4) 7

    3 

    10

     (javascript executes line by line)

5) function outerfunction() {

    console.log(a);          (undefined)

    var a = 10;



    innerfunction();



    function innerfunction() {

    console.log(a);                           (10)

    console.log(window.a);              (7)

    console.log(this.a)                      (7)

    }

    }



    var a = 7;

    var b =3



    outerfunction();

    





ouput

_____

undefined

10

7

7