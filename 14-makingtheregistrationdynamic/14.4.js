Task Description
Watch this video

https://www.youtube.com/watch?v=IGoAdn-e5II



Deliverable

Watch uptill the 18th min and write down the code as per the youtuber does both the pronises and asyn await
Now create a new promise called getColdDrinks which come after husband gets butter. Integrate the code in both async and await and also promises' code
Continue watching from the 18th min to 23rd min and understand how to handle Promise.all with async await
Convert the createPost , deletePost you wrote previously into async await completely


[Favourite Interview Question] - Why are async await better than promises ? Explain with an example.

Watch my video to understand https://youtu.be/vWzY4PVcP-Y
Write your own answer with an example


Push the code to git and upload the commit IDs

Your Answer
commit 47ac496ea9f9ad7237c0e03e9911231edf8c3d27





console.log(`person1: shows ticket`);

console.log(`person2: shows ticket`);



const promiseWifeBringingTicks=new Promise((resolve, reject) =>{

    setTimeout(() => {

        resolve(`ticket`)

    }, 3000);

})



const getpopcorn= promiseWifeBringingTicks.then((t) =>{

    console.log(`wife:i got the tics`);

    console.log(`husband:we should go in`);

    console.log(`wife: no i am hungary`);

    return new Promise((resolve, reject) =>{resolve(`${t} popcorn`)})

})

const getButter= getpopcorn.then((t) =>{

    console.log(`husband: i got some popcorn`);

    console.log(`husband:we should go in`);

    console.log(`wife: no i need butter on my popcorn`);

    return new Promise((resolve, reject) =>{resolve(`${t} butter`)})

})

getpopcorn.then((t) =>{console.log(t);})



console.log(`person4: shows ticket`);

console.log(`person5: shows ticket`);







console.log(`person1: shows ticket`);

console.log(`person2: shows ticket`);



const preMovie=async()=>{

    const promiseWifeBringingTicks=new Promise((resolve, reject) =>{

        setTimeout(() => {

            resolve(`ticket`)

        }, 3000);

    })

const getPopcorn = new Promise((resolve, reject)=>resolve(`popcorn`))



const addButter=new Promise((resolve, reject)=>resolve(`butter`))



const getColdDrink = new Promise((resolve, reject)=>resolve(`coldDrink`))



    let ticket=await promiseWifeBringingTicks



        console.log(`wife:i got the ${ticket}`);

        console.log(`husband:we should go in`);

        console.log(`wife: no i am hungary`);



        let popcorn=await getPopcorn;



        console.log(`husband: i got some ${popcorn}`);

        console.log(`husband:we should go in`);

        console.log(`wife: no i need butter on my popcorn`);



        let butter=await addButter



        console.log(`husband:i got some ${butter}`);

        console.log(`husband:anything else?`);

        console.log(`wife:i need coldDrink`);



        let coldDrink=await getColdDrink



        console.log(`husband:here your ${coldDrink}`);

        console.log(`wife:lets go we are getting late`);

        console.log(`husband:okay`);

    return ticket

};

preMovie().then((m)=>console.log(`person3: shows ${m}`))



console.log(`person4: shows ticket`);

console.log(`person5: shows ticket`);





Async/Await is used to work with promises in asynchronous functions. It is basically syntactic sugar for promises. It is just a wrapper to restyle code and make promises easier to read and use. It makes asynchronous code look more like synchronous/procedural code, which is easier to understand.



A significant benefit of the async/await pattern in languages that support it is that asynchronous, non-blocking code can be written, with minimal overhead, and looking almost like traditional synchronous, blocking code.

