Deliverables

Write an arrow function which returns the product of two numbers
Watch video 15 and create a student object
Are you confused about how this works.Let the admin know that . Raise a question in question forum too.\


Watch this video where i explain about the difference between fat arrow functions and this keyword

https://www.youtube.com/watch?v=QlFu-PiASFU



Your Answer
1)   const multiple = (a,b)=> a*b

     console.log(multiple(2,3));





2)     class student{

    constructor(name,age,marks){

        this.name = name;

        this.age = age;

        this.marks = marks;

    }

    setPlacementAge(minPlacementAge){

        return (minMarks)=>{

            if(this.marks>minMarks&&this.age>minPlacementAge){

                console.log(this.name +" is ready ");

            }else{

                console.log(this.name + "is not ready");

            }

        }

    }

}

const hanu= new student("hanu",25,75)

const manu=new student("manu",12,32)

hanu.setPlacementAge(18)(40)