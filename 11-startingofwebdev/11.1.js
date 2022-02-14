// Watch this video from here uptill the 24th min and answer the following

// https://www.youtube.com/watch?v=hdI2bqOjy3c&t=858s





// 1) Template Strings



// Take variable like name , age , address and fill them with your personal details.

// Now make a new variable called personDetails and make a string which states that 'My name is "name var" , age "age var", address is "address var".



// Example



// name = 'Yash Prasad'

// age = 25

// address = "Prestige Falcon City, Bangalore"



// OUTPUT

// personal details = My name is Yash Prasad, age is 25, address is Prestige Falcon City, Bangalore



// 2)Split the String



// Take the string above and split it into an array using the comma delimeter



// Ex Input

// My name is Yash Prasad, age is 25, address is Prestige Falcon City, Bangalore



// Output Array

// [

// "My name is Yash Prasad",

// "age is 25",

// "address is Prestige Falcon City",

// "Bangalore"

// ]



// Paste the code here , once done

let name='labeeb'

let age=21

let address='kollengode ,palakkad'

let PersonalDetails=`my name is  ${name}, my age is    ${age} , my address is   ${address}`

console.log(PersonalDetails);

let array=PersonalDetails.split(",")

console.log(array);





// Watch the video from the 12 th min uptill the 24 th minute

// https://www.youtube.com/watch?v=W6NZfCO5SIk



// Deliverable (Write the code in JS only)



// 1) Take two numbers and swap them.

// 2) Can you do swapping without taking any new variable

let x=5,y=4

x=x+y

y=x-y

x=x-y

console.log(x,y);