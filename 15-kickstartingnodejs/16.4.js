What willl be the output of this



1) console.log('a');

console.log('b');

setTimeOut(() => console.log('c'), 3000)

console.log('d');





2) console.log('a');

console.log('b');

setTimeOut(() => console.log('c'), 3000)

setTimeOut(() => console.log('d'), 0)

console.log('e');



Challenge

Can you make the above code print in the following sequence using promises and async/await. Write the code and paste it here



Expected Output

a

b

c

d

e







Your Answer
1) a

     b

     d

     c



2)  a

      b

      e

       d

       c