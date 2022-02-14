Task Description
Watch the video from here

https://www.youtube.com/watch?v=PoRJizFvM7s&t=665s



Deliverable



1) Watch uptill first 15:30 ,  create a promise as per the youtuber does

2)Create a new function called delete post which uses promises and deletes in 1 second (processing time - mimic it with setimeout). Everytime you call it, it should delete the last element of the array

3)Continue deleting the elements up till all the elements are deleted from the array. Now when you delete again an error would be thrown , catch the error and console log in the browser-> Array is empty now

4)Try creating a post and deleting at the same time, how would you do it(Think!!!)

5)Try creating a post and deleting at the same time, how would you do it. Do this in such a way that is not dependent on setTimeout timer value.(Think!!!)



Promise.all 



Watch the video from here https://www.youtube.com/watch?v=PoRJizFvM7s&t=925s uptill 18:30 min and implement the code which the youtuber does based on promise.all
I want you to create one more promise called updateLastUserActivityTime. Every time the user creates a post, this promise should be parallely called (should execute in 1 second) .When both the promises (createPost and updateLastUserActivityTime resolve), I want you to console log all the posts created and lastActivityTime of the user. [If stuck for long watch the last hint]
Once the above promises are resolved , I want you to delete the post by calling the deletion promise. Once successfully deleted, I want you to log the new set of Posts of the user.


[Favourite Interview Question ] - Tell me one thing, Why are promises better than callbacks. If you are confused , watch this video https://www.youtube.com/watch?v=a0wQVfUv-OA

Write a short answer on callback vs promises






IF you are stuck or confused , watch the video given in the hint section.



Push the code and upload the commit ID

Your Answer

Hint


commit f440e16facbb834930d7b8a164b692d462aa62c4



let posts=[

    {title:'post one',body:`this is post one`},

    {title:`post two`,body:`this is post two`}]

    function getPosts() {

        setTimeout(() => {

            let output=``

            posts.forEach((post) => {

                output+=`<li>${post.title}</li>`

            })

            document.body.innerHTML=output

        },1000);

    }



    function updateLastActivityTime() {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve()

                posts.map((post) =>console.log(post))

            }, 1100);

        })

    }



    function createPost(post) {

        updateLastActivityTime()

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                posts.push(post)

                const error=false

                if (!error) {

                    resolve()

                }else{

                    reject(`Error:something went wrong`)

                }

            }, 1000);

        })

    }



    createPost({title:`post three`,body:`this is post three`})

    .then(getPosts)

    .catch(err=>console.log(err))



    function deletePost() {

        return new Promise((resolve,reject)=>{

            setTimeout(() => {

               

               

                if (posts.length) {

                    resolve()

                }else{

                    reject(`Error:Array is empty`)

                }

            }, 1000);

        })

    }

    const timerId=setInterval(() => {

        deletePost()

        .then(()=>{

            posts.pop()

            let lastPost=document.querySelector(`body`).lastChild

            lastPost.parentNode.removeChild(lastPost)

        })

        .catch((err)=>{

            console.log(err);

            clearInterval(timerId)

        })

    }, 2000);





const promise1= Promise.resolve(`hello world`)

const promise2=10

const promise3=new Promise((resolve,reject)=>

setTimeout(resolve,2000,`goodbye`))



Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))





promises can handle multiple asynchronous operations easily and provide better error handling than callbacks and events. In other words also, we may say that, promises are the ideal choice for handling multiple callbacks at the same time, thus avoiding the undesired callback hell situation.

