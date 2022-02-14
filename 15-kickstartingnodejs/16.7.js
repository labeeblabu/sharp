Deliverable:-

Make the similar form like the youtuber does which writes to a file and redirects too with 302 response.
What is the use of having buffers and streams? When would you use it?.




Project:-



I want you to read all the messages from the file and show it at the top of the form.
Everytime you add a new message it should show at the top of the form.




Push the code to Git and upload the commit ID

Your Answer
commit id   a9087d43e824a604273800e462fad5fc096f784e





A buffer is a temporary memory that a stream takes to hold some data until it is consumed. In a stream, the buffer size is decided by the highWatermark property on the stream instance which is a number denoting the size of the buffer in bytes. A buffer memory in Node by default works on String and Buffer .



buffer:-

The Buffer class in Node. js is designed to handle raw binary data. Each buffer corresponds to some raw memory allocated outside V8. Buffers act somewhat like arrays of integers, but aren't resizable and have a whole bunch of methods specifically for binary data.



stream:-

Streams are one of the fundamental concepts of Node. js. Streams are a type of data-handling methods and are used to read or write input into output sequentially. Streams are used to handle reading/writing files or exchanging information in an efficient way