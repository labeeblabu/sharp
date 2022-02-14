// Write a program that would print the information (name, year of joining, salary, address)
//  of three employees by creating a class named 'Employee' and inside the class there is a
//   function print_details printing all the details of the employee .The output should be as follows:

// Name        Year of joining        Address

// Robert            1994                64C- WallsStreat

// Sam                2000                68D- WallsStreat

// John                1999                26B- WallsStreat
class Employee {
    constructor(name,yearofjoining,salary,address){
      this.name=name
      this.yearofjoining=yearofjoining
      this.salary=salary
      this.address=address
    }
      printdetails(){
        return console.log(this.name,this.yearofjoining,this.salary,this.address);
      }
  }
  let emp1=new Employee(`robert`,1994,10000,`64c-wallstreet`)
  let emp2=new  Employee(`sam`,2000,10000,`68d-wallstreet`)
  let emp3=new  Employee(`john`,1999,10000,`26b-wallstreet`)
  console.log(`name     year of joining    salary     address`);
  emp1.printdetails()
  emp2.printdetails()
  emp3.printdetails()