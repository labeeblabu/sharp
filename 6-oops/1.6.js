// Write a program by creating an 'Employee' class having the following methods and print the final salary.

// 1 - 'getInfo()' which takes the salary, number of hours of work per day of employee as parameter

// 2 - 'AddSal()' which adds $10 to salary of the employee if it is less than $500.

// 3 - 'AddWork()' which adds $5 to salary of employee if the number of hours of work per day is more than 6 hours.

class Employee {
  constructor(salary=0,time_of_work=0,){
    this.salary=salary;
    this.time_of_work=time_of_work;
    }
  getinfo(){
    return `salary:${this.salary} time_of_work:${this.time_of_work}`
  }
  addsal(){
    if(this.salary<500){
    this.salary+=10
    }
  }
  addwork(){
    if(this.time_of_work>6){
    this.salary+=5
      }
  }
  }
  let emp1= new Employee(490,7)
  let emp2= new Employee(410,2)
   emp1.addsal()
   emp1.addwork()
  console.log(emp1.getinfo())