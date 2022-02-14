Answer the following questions

Explain the nodejs event driven architecture.
How can it basically scale to handle 1000 of requests a sec. What helps node JS even though it is single threaded?
What does process.exit do?
What does req.url , req.header and req.method contain?


Deliverable

Like the youtuber return a response like "Welcome to my Node Js project". Just follow the way he writes code in 30th video.
Based on the url the user hits , I want you to return custom responses.
When url = /home , return response ==> Welcome home
When url = /about, return response ==> Welcome to About Us page
When url =/node, return response ==> Welcome to my Node Js project


Push the code to GIt and upload the commit ID

Your Answer
1)   Event-Driven Programming

       Node. js uses events heavily and it is also one of the reasons why Node. js is pretty fast compared to other similar technologies. 

       As soon as Node starts its   server, it simply initiates its variables, declares functions and then simply waits for the event to occur



2)    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture

       NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.

       js follows Single-Threaded with Event Loop Model inspired by JavaScript Event-based model with JavaScript callback mechanism.

       So, node. js is single-threaded similar to JavaScript but not purely JavaScript code which implies things that are done asynchronously like network calls.

       file system tasks, DNS lookup, etc.



3)   The process. exit() method is used to end the process which is running at the same time with an exit code in NodeJS.

      

       So when you call process. exit() you actually emit the exit event that ends all tasks immediately even if there still are asynchronous 

       operations not been done. process. exit() takes an exit code (Integer) as a parameter.



4)   req. url is a string containing the currently requested URL path

       req.header contains a link pointing to the Node documentation of the underlying object.

       The req. method property contains a string corresponding to the HTTP method of the request which can be either GET, POST, PUT, DELETE, etc.



      commit  80285afce90131f134502851ea0ff20c2bf34e71