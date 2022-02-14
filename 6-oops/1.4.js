// Write a program to print the area and perimeter of a triangle object having sides of
//  3, 4 and 5 units by creating a class named
//  'Triangle' and having two functions calculate_area and calculate_perimeter and two constructors
// (default- all sides as 0 and parameterized constructor where you assign (3,4,5)) .

class Triangle{
    constructor(){
    this.side1=3
    this.side2=4
    this.side3=5   
    }
    calculatePerimeter(){
      console.log(this.side1+this.side2+this.side3);
    }
    calculateArea(){
     console.log(this.side1*this.side2/2);
   }
  }
  let obj=new Triangle()
 obj.calculatePerimeter()
      obj.calculateArea()