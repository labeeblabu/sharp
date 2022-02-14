// (Important) Watch the following video to understand about subarrays - Video_Link



// After watching the video write the code to print all the subarrays possible. Note - print in the similar way as given here.

// Input:-

// [1,2,3,4,5]

// Output:-

// 1

// 12

// 123

// 1234

// 12345

// 2

// 23

// 234

// 2345

// 3

// 34

// 345

// 4

// 45

// 5

// https://www.youtube.com/watch?v=RXccMVsvjbU
let a=[1,3,4,5,6]
for(var i=0;i<a.length;i++){
    for(var j=0;j<a.length;j++){
        for(var k=i;k<=j;k++){
            console.log(a[k]);
        }
        console.log();
    }
}