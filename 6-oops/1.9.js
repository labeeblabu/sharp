// Create a class "PARENT" with a method that prints "This is parent class" and its Child class "CHILD"
//  with a method that prints "This is child class". Now, create an object for each of the class and call

// 1 - method of parent class by object of parent class

// 2 - method of child class by object of child class

// 3 - method of parent class by object of child class
class Parent {
    constructor(a){
      this.a=a
    }
    parentmethod(){
        console.log(`this is parent class`);
    }
}
class Child extends Parent{
    constructor(a){
        super(a)
    }
    childmethod(){
        console.log(`this is child class`);
    }
}
let objp=new Parent()
let objc= new Child()
objp.parentmethod()
objc.childmethod()
objc.parentmethod()