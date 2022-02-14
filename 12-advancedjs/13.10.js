Task Description
Is javascript single threaded or multithreaded? Answer this





Watch this video to understand how callback functions work

https://www.youtube.com/watch?v=btj35dh3_U8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=16





Questions



What will be the output of the following



1)



setTimeout(() => console.log('timer expired'), 1000)



function x(y) {

console.log('inside x');

y();

}



x(function y(){

console.log('inside y')

})



2)



setTimeout(() => console.log('timer1 expired'), 1000)



setTimeout(() => console.log('timer2 expired'), 0)



function x(y) {

console.log('inside x');

y();

}



x(function y(){

console.log('inside y')

})





3)



setTimeout(() => console.log('timer1 expired'), 1000)



setTimeout(() => console.log('timer2 expired'), 0)



function x(y) {

console.log('inside x');

y();

}



x(function y(){

setTimeout(() => console.log('inside y'), 0)

})



4) How does the V8 engine go about execution of the above program. Make it a point to ask if you are not sure in the standup. The above questions are very important.



5)Make a button and onclick of the button console.log('clicked me') like the way the youtuber does



6) Add an event listener called DOMCONTENTLOADED , inside this add a call back function which consoles "DOM has loaded"



7) What is garbage collection . Why do we need to free up memory , any idea

Your Answer
javascript is single threaded language



1)  inside x

     inside y

     timer expired



2)  inside x

     inside y

     timer2 expired

     timer1 expired 



3)  inside x

     timer2 expired

     inside y

     timer1 expired 







        html

        



                    <!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

</head>

<body>

    <h1 id="heading"> namaste </h1>

    <button id="clickme"> click me</button>

    <script src="index.js"></script>

</body>

</html>







         javascript 







             

function DOMCONTENTLOADED (){

    let count=0;

    document.getElementById("clickme").addEventListener("click", function xyz(){

        console.log(" DOMCONTENTLOADED",++count);

    });  

}

DOMCONTENTLOADED ()

    







7)    we have to remove eventlistners cos its heavy taking memmory cos of closure so its slows the page so we remove it to garbage collection