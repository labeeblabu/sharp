// Create a class named 'Student' with String variable 'name' and integer variable 'roll_no'.
//  Use Constructors to 
//Assign the value of roll_no as '2' and that of name as "John" by creating an object of the class Student.

class Student {

    constructor(name,rollno){
  
      this.name=name
  
      this.rollno=rollno
  
    }
  
  }
  
  const student= new Student(`john`,2)
  
  console.log(student);