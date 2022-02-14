// Watch the video from here

// https://www.youtube.com/watch?v=hdI2bqOjy3c&t=1809s



// Watch what the youtuber is doing and implement the following



// In the person object, print "movies" from the hobbies
// In the person object, print the "state" value from address key




// Destructuring the object



// Take out the age from the person object using destructing and console log
// Take out state from the person object using destructing and console log
// Implement the for loop and while loop like the youtuber and print the id in the todolist


// Paste the code here after completing
let person={
  firstName:`John`,
    lastName:`Doe`,
    age:30,
    hobbies:[`music`,`movies`,`sports`],
    address:{
      street:`50 main st`,
      city:`Boston`,
      state:`MA`
    }
  }
  //printing movies
  console.log(person.hobbies[1]);
  //printing state
  console.log(person.address.state);
  //destructing person to get the age
  let {age}=person
  console.log(age);
  //destructing person to get the state
  let {address:{state}}=person
  console.log(state);
  //implementing for loop and while loop
  let todos=[{
    id:1,
    text:`Take out trash`,
    isCompleted:true
  },{
    id:2,
    text:`meeting with boss`,
      isCompleted:true
  },{
    id:3,
    text:`Dentist appt`,
    isCompleted:false
  },
  ]
  for (const todo of todos) {
    console.log(todo.id);
  }
  let i=0
  while (i<todos.length) {
    console.log(todos[i].id);
    i++
  }