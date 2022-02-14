// Watch the video from here uptill 1hr 5th minute 

// https://www.youtube.com/watch?v=hdI2bqOjy3c&t=3565s



// Deliverables



// Create a constructor function Student which takes in first name, last name , roll number , Sex and date of birth
// Make 2 students objects
// Console log the full name (first name + last name) of the student object with greater age
// Write a function inside the constructor to getBirthYear and fullName of the student
// Write a function outside which takes minimum age to be egligible as arguments and return whether the student is egligible or not by calculating his age from dob .
// If student's age greater than or equal to minimum age to be egligible => he is egligible, else he is not egligible



// If stuck for more than 1 hour check the hints



// Paste the code here after completing
function Student(firstName,lastName,rollNo,sex,dob) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.rollNo=rollNo
    this.sex=sex
    this.dob=new Date(dob) 
    this.fullName=function(){
      return (`${this.firstName} ${this.lastName}`)
    }
  this.getBirthyear=function(){
      return this.dob.getFullYear()
    }
  }
  function minAge(std) {
    let today=new Date()
       let age=today.getFullYear()-std.getBirthyear()
    return age>=18? `eligible`:`not eligible`
  }
  let std1=new Student(`abijith`,`dev`,21,`male`, '1998-08-18')
  let std2=new Student(`rahul`,`mon`,22,`male`,`2005-08-12`)
  console.log(std1.fullName());
  console.log(std1.getBirthyear());
  console.log(minAge(std1));
  console.log(minAge(std2));