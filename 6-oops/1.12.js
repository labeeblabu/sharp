// Create a class named 'Shape' with a method to print "This is This is shape". Then create 
// two other classes named 'Rectangle', 'Circle' inheriting the Shape class, both having a 
// method to print "This is rectangular shape" and "This is circular shape" respectively. 
// Create a subclass 'Square' of 'Rectangle' having a method to print "Square is a rectangle".
//  Now call the method of 'Shape' and 'Rectangle' class by the object of 'Square' class.


class Shape{
    printShape(){
    console.log( `this is this is shape`)
}
}
class Rectangle extends Shape {
printRectangle(){
    console.log(`this is rectangular shape`);
}
}
class Circle extends Shape {
printCircle(){
    console.log(`this is circular shape`);
}
}
class Square extends Rectangle{
printSquare(){
    console.log(`square is a rectangle`);
}
}
let obj=new Shape()
let obj1=new Circle()
let obj2=new Square()
obj.printShape()
obj1.printCircle()
obj2.printShape()
obj2.printRectangle()
obj2.printSquare()