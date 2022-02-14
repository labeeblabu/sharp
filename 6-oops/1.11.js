// Create a class named 'Member' having the following members:

// Data Attributes

// 1 - Name

// 2 - Age

// 3 - Phone number

// 4 - Address

// 5 - Salary

// It also has a method named 'printSalary' which prints the salary of the members.

// Two classes 'Employee' and 'Manager' inherits the 'Member' class. The 'Employee' and
//  'Manager' classes have data members 'specialization' and 'department' respectively.
//   Now, assign name, age, phone number, address and salary to an employee and a manager
//    by making an object of both of these classes and print the same.
class Member {
    constructor(name,age,phoneno,address,salary){
       this.name=name
       this.age=age
       this.phoneno=phoneno
       this.address=address
       this.salary=salary
   }
   printsalary(){
       console.log(this.salary)
   }
}
class Employee extends Member {
   constructor(name,age,phoneno,address,salary,specialization){
       super(name,age,phoneno,address,salary)
       this.specialization=specialization
   }       
}
class Manager extends Member{
   constructor(name,age,phoneno,address,salary,department){
       super(name,age,phoneno,address,salary)
       this.department=department
   }
}
let emp1=new Employee(`leb`,21,78989,`palakkad`,60000,`devolper`)
let emp2=new Manager(`zayn`,34,23457,`banglore`,40000,`sales`)
console.log(emp1);
console.log(emp2);