// Watch the video from here till the end

// https://www.youtube.com/watch?v=hdI2bqOjy3c&t=4041s



// Convert all the features present in the functional contructor into classes . Best Design pattern to follow
class Student {
    constructor(firstName, lastName, rollNo, sex, dob) {
      this.firstName = firstNam;
      this.lastName = lastName;
      this.rollNo = rollNo
      this.sex = sex
      this.dob = new Date(dob)
    }
    fullName () {
      return (`${this.firstName} ${this.lastName}`)
    }
    getBirthyear() {
      return this.dob.getFullYear()
    }
  }
  function minAge(std) {
    let today = new Date()
    let age = today.getFullYear() - std.getBirthyear()
    return age >= 18 ? `eligible` : `not eligible`
  }
  let std1=new Student(`john`,`doe`,21,`male`, '1998-08-18')
  let std2=new Student(`rahul`,`kumar`,22,`male`,`2005-08-12`)
  console.log(std1.fullName());
  console.log(std1.getBirthyear());
  console.log(minAge(std1));
  console.log(minAge(std2));