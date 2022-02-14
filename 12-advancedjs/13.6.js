Task Description
Watch this video to understand closures in depth.

Take Notes to prepare before interview!!!

https://www.youtube.com/watch?v=qikxEIxsXco&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=12



Questions



1) 

function x(){

let a = 10;

function y(){

console.log(a);

}

y()

}



x();



2) 

function x(){

let a = 10;

function y(){

console.log(a);

}

return y();

}



x();



3)  function x(){

let a = 10;

function y(){

console.log(a);

}

return y;

}



console.log( x());



4)  function x(){

let a = 10;

function y(){

console.log(a);

}

return y;

}



const z = x()

console.log(z());



5) 

function x(){

let a = 10;

function y(){

console.log(a);

}

a= 50;

return y;

}



const z = x()

console.log(z());







Your Answer
1)     10



2)     10



3)     f  (y) {



        console.log(a)

    

        }



4)    10

        undefined



5)     50

        undefined