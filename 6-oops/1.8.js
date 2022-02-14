// Write a program to create a class count_objects and calculate the number of objects that has been 
// created in realtime.

let count=0
class Countobjects{
    constructor(price){
        this.price=price
        count++
    }
    static count(){
        return count
    }
}
let obj= new Countobjects(6868686)
let obj1=new Countobjects(68)
let obj2=new Countobjects(678)
console.log(Countobjects.count());