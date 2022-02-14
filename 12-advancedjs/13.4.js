Task Description
Find the output of the following function along with reasons. There are no videos to watch in this task.





QUESTION 1



console.log('a');

console.log('b');



setTimeout(()=> console.log('c'), 1000);



console.log('d');



QUESTION 2 



console.log('a');

console.log('b');



setTimeout(()=> console.log('c'), 1000);



setTimeout(()=> console.log('c'), 0);



console.log('d');





QUESTION 3



Write down the 10 new features introduced in ES6 along with what they mean and where they could be used





QUESTION 4



What is array.map function . Please write the code of array.map function in plain javascript without using any inbuilt functions.

Your Answer
1)   a

      b

      d(javascript doesnt wait fot timeout)

      c





2)   a

      b

      d

      c

      c



3)   let const

      arrow functions

      array helper like foreach

      classes

      promises

      destructuring

      template strings

      distructuring

      map



4)   The Array.map() method allows you to iterate over an array and modify its elements using a callback function. The callback function will then be executed  

       on each of the array's elements.



       let arr = [3, 4, 5, 6];

       let modifiedArr = arr.map(function(element){

       return element *3;

       });

      console.log(modifiedArr)   // [9, 12, 15, 18]