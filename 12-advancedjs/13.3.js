Task Description
Go through this video and answer the following questions WITH REASONs.

https://www.youtube.com/watch?v=BNC6slYCj50&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=9



QUESTION 1



console.log(a)

console.log(b);

let a =5;

var b =6;

console.log(b);







QUESTION 2



What is the difference between type error vs syntax error vs reference error.

Give Examples of when you can encounter each one of them.



QUESTION 3



console.log(a);

var a = 5;



console.log(b) //we havent initialized b, Guess the output



QUESTION 4



let a = 5;

var b = 6;



console.log(this.b);

console.log(window.b)

console.log(window.a)

console.log(this.a);



QUESTION 5



let a =5;

let a = 6;



What will be the error



QUESSTION 6



let a =6;

const b



What will be the error

Your Answer
1)       console.log(a) // uncaught reference error  (calling before intialisation , calling  a which is initialised using let so not stored in global space)

          console.log(b); // undefined(calling before intialisation)

          let a =5;

          var b =6;

          console.log(b); //6(just printing b)





2)       type error                                   syntax error                               reference error

          const b=100;                               const b;                                      console.log(a)

          b=10                                              b=10;                                          let a=10





3)     console.log(a);            //undefined

           var a = 5;           



            console.log(b)          //reference error b is not defined





4)         let a = 5;

            var b = 6;



           console.log(this.b);           //6                   (var is in global)

           console.log(window.b)     //6

           console.log(window.a)     //undefined      (let is in temporal dead zone)

           console.log(this.a);          //undefined





5)        syntax error  // SyntaxError: Identifier 'a' has already been declared



6)        syntax error   //SyntaxError: Missing initializer in const declaration