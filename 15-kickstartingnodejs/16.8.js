Did you understand event loop ? Please explain it in your words if you did. If you didnt please raise a question in next class.
An event loop is often the main loop in a program that typically waits for the user to trigger something.

Deliverables:



Why are we using Express JS ? Any reasons?
Install Express Js
What are middlewares ?
What is next used for.
What is res.send used for?
If i do res.send('<h1> hello to node js </h1>') . What will be the content-type header equal to.
If I do res.send( { key1: value }) . What will be the content-type header equal to.
What does app.listen(3000) do behind the scenes ?
Now push the code with the.2 middlewares and app.listen as shown by youtuber. Upload the commit iD too.
Your Answer
express js make code simple and easier



Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next middleware function in the application's request-response cycle.





next is used for jump to next miidleware





The res. send function sets the content type to text/Html which means that the client will now treat it as text. It then returns the response to the client  



html



creates the server





Task Description
Refer to videos number 63 to 65





Deliverables: -

Create the /add-product route which shows a form. Once user has filled , console log it after parsing it using bodyparser.
What is the body parser used for?
Now add one more input tag in the add product page so that user can input size of the product.
When the user clicks on submit parse both the input tags and show it in console.




Note: For submission of code upload the code to GitHub and add the commit id in the answer block

Your Answer
Body-parser is the Node. js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it.





commit id :   37fc9c2163cfab2c282a2aa27bcfd93deff6b8d9

MVC:Model is data part. View is User Interface part. Controller is request-response handler.