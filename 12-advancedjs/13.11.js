Task Description
https://www.youtube.com/watch?v=8zKuNo4ay8E&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=17



This is one of the most important topics for interview purpose.



Deliverable



1) Watch uptill the 19th min and explain about how Execution context goes about executing callback function. Explain each step

2) When is the global execution context removed from the stack?

3)Continue watching uptill 25th min and explain how does the DOM APIs and how callback is encounter and stored in event loop and finally when is it executed

4)Continue watching uptill 27min 30 sec and explain why do we need the callback queue

5)Continue watching uptill 36th min. Explain how does fetch work when clubbed with cb.

6) Complete the video What is microtask queue and how is it different

7)What is starvation ?

Your Answer
1)    when callback fn is called then it registers in web then when its times over then passed through callabck queue the event loops checks it and eventloop put

        it to call stack



2)    when  the codes are finished (even before the callback fn executes)





3)    the eventlistner regisrs on the event and then it moves to callback que it stays there until someone called the event , if it need th execute then event loop 

       passes it to call stack



4)    cos when someone clicks many times some function but we can execute one at a time so weve to store it 

        

5)     fetch is in microtask queue whatever comes inside microtask queue executes first then callback queue so after the gec is removed fetch executes 



6)    microtask queue has priorities the fn inside the microtask queue executes first then callback , all the callback fn come throgh promise and mutation observer    

       goes through microtask queue



7)    in some case inside microtask queue it leads to another microtask queue and it leads to another and goes on so the callback fn never get a chance to 

       execute for a long time this condition is starvation