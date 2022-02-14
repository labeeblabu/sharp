// Watch this video to code the following deliverables as per the timelines given below. DONT watch everything in one shot !!!

// https://www.youtube.com/watch?v=RBLIm5LMrmc



// Deliverables



// 1) Watch uptill the first 4:30 min - Implement the class User as per the youtuber. Every time a new user registers, keep a count of number of registered users.

// At any given point of time if we do User.registeredUsers , i should be able to get the value .

// Check Hint 1 if you are stuck.





// 2)Watch the remaining video to understand inheritance :  Code along with the youtuber to understand how inheritance works.



// 3)[Watch this video https://www.youtube.com/watch?v=irrxnH-nkqg to understand Dates] Add a new state called membershipactivetilldate : date. Whenever a new member is created give him one month of free trial from the day he is created in your platform via constructor.



// 4) Add a new function called renew Membership which based on membership type (Standard or Yearly) increase the membershipactivetilldate by 1 month or 1 year respectively. Also change the membership type accordingly
class User {
    static count = 0;
    constructor(userName, email, password) {
      this.userName = userName;
      this.email = email;
      this.password = password;
    }
    static registerdUsers() {
      return this.count
    }
    register() {
      User.count++
      console.log(`${this.userName} is now registered`);
    }
  }
  let bob = new User(`bob`, `bob@mail`, `bobsteve`);
  bob.register();
  console.log(User.registerdUsers());
  let steve = new User(`steve`, `steve@mail`, `steve`)
  steve.register();
  console.log(User.registerdUsers());
  class Member extends User {
    constructor(userName, email, password, memberPackage) {
      super(userName, email, password)
      this.package = memberPackage
      let today=new Date()
      let membershipactivetillYear=today.getFullYear()
      let membershipactivetillmonth=today.getMonth()
      let membershipactivetillday=today.getDay()
      this.membershipactivetillDate=new Date(
        membershipactivetillYear,
        membershipactivetillmonth,
        membershipactivetillday
    )
    }
    renewMembership(type){
      let membershipactivetillYear=this.membershipactivetillDate.getFullYear()
      let membershipactivetillmonth=this.membershipactivetillDate.getMonth()
      let membershipactivetillDay=this.membershipactivetillDate.getDay()
      if (type===`standard`) {
        this.membershipactivetillDate=new Date(
          membershipactivetillYear,
          membershipactivetillmonth+1,
          membershipactivetillDay
        )
        this.package=`standard`
      }else{
        this.membershipactivetillDate=new Date(
          membershipactivetillYear+1,
          membershipactivetillmonth,
          membershipactivetillDay
        )
        this.package=`yearly`
      }
    }
    getPackage() {
      console.log(`${this.userName} is subscribed to the ${this.package}`);
    }
  }
  let mike = new Member(`mike`, `mike@mail`, 123, `standard`)
  console.log(mike);
  mike.getPackage()
  mike.renewMembership(`yearly`)
  console.log(mike);