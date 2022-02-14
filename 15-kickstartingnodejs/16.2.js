[Watch video 17] - Understand array.map watching the code
Take an array = ['apple', 'oranges' , '', 'mango', '' , 'lemon]. Transform it into ['apple', 'oranges' , 'mango', 'lemon] using array maps
How is hobbies const and it still doesnt error out when we add new elements to the array as in the video.
[Watch video 18] - What according to you is spread opertor. Does spread operator create a new object or point to the same old object?
What is rest operator.


What will be the output of this





1) const obj1 = {'key1': 1}

const obj2 = { ...obj1}

if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}



2) const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)



Your Answer
array is reference type

spread operator pulls out the elements from array/abject and put the value into new array/object

rest operator is used in functions to merge multiple arguements 





1) different ovjects



2)  {key1: 1, key2: 2}

     {key1: 1000, key2: 2}