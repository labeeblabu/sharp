Task Description
Understand Call Apply and Bind



https://www.youtube.com/watch?v=c0mLRpw-9rI



Deliverable



Write a function and use 'call' to call the function
Write a program using apply
Write a program using bind
Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
Dont pass in args. Read from 'this' and use BIND





Understand currying now from this video



https://www.youtube.com/watch?v=vQcCNpuaJO8



Deliverable



Write down the code like the way the youtuber does


Push all the code to git and upload the commit ID

Your Answer
commit 3afad71d08f0b17d9ecbb6ab587f9cd920e00907







// // call method

// let name={

//     firstname:"le",

//     lastname:"b",

// }

// let printName= function(){

//     console.log(this.firstname+ " " + this.lastname);

// }

// printName.call(name);

// //apply method 

// let name={

//     firstname:"le",

//     lastname:"b",

// }

// let printName= function(hometown){

//     console.log(this.firstname+ " " + this.lastname +" from "+hometown);

// }

// printName.call(name,["palakkad"]);

// //bind method 

// let name={

//     firstname:"le",

//     lastname:"b",

// }

// let printName= function(){

//     console.log(this.firstname+ " " + this.lastname);

// }

// let printmyname=printName.bind(name);

// console.log(printmyname);

// printmyname()

// // Create a new object called Student with age 20 , write a function which prints the age of the student

// //  from the student object.

// let Student={

//     age: 20,

// }

// let myage=function(){

//     console.log("this.age")

// }

// let studentage=myage.bind(Student)

// console.log(studentage);

// studentage()

//Write down the code like the way the youtuber does



//using bind



let multiply = function(x,y){

    console.log(x+y);

}

let multiplybytwo=multiply.bind(this,2);

multiplybytwo(3);

let multiplybythree=multiply.bind(this,3);

multiplybythree(5);



//using closure



let multiply =function(x){

    return function(y){

        console.log(x+y);

    }

}



let multiplybytwo =multiply(2)

multiplybytwo(3)



let multiplybythree =multiply(3)

multiplybythree(10)