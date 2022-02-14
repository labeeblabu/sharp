Task Description
Guess the output with reason stating why you chose the answer



1)

console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 1000)

console.log('d')





2)

console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 0)

console.log('d')





3)

console.log('a');

console.log('b');

setTimeout(() => console.log('e'), 1000)

setTimeout(() => console.log('c'), 0)

console.log('d')

Your Answer
1)     a

        b

        d 

        c  (cos of settimeout and it will take place only after all other code end ie after GEC removed  then ony calbck queue pass it to eventloop and check its empty 

             then push it_)



2)    a

       b

       d 

       c(still the callback fn works even if 0 time)



3)    a

       b

       d

       c  (the time of c<time of e)

       e

