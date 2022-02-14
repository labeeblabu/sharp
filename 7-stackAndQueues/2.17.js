// First non-repeating character in a stream of characters
// Medium
// 153
// 22
// Add to favorites
// Asked In:
// AMAZON
// FLIPKART
// Problem Description

// Given a string A denoting a stream of lowercase alphabets. You have to make new string B.

// B is formed such that we have to find first non-repeating character each time a character is inserted to the stream and append it at the end to B. If no non-repeating character is found then append '#' at the end of B.



// Problem Constraints
// 1 <= length of the string <= 100000



// Input Format
// The only argument given is string A.



// Output Format
// Return a string B after processing the stream of lowercase alphabets A.



// Example Input
// Input 1:

//  A = "abadbc"
// Input 2:

//  A = "abcabc"


// Example Output
// Output 1:

//  "aabbdd"
// Output 2:

//  "aaabc#"


// Example Explanation
// Explanation 1:

//     "a"      -   first non repeating character 'a'
//     "ab"     -   first non repeating character 'a'
//     "aba"    -   first non repeating character 'b'
//     "abad"   -   first non repeating character 'b'
//     "abadb"  -   first non repeating character 'd'
//     "abadbc" -   first non repeating character 'd'
// Explanation 2:

//     "a"      -   first non repeating character 'a'
//     "ab"     -   first non repeating character 'a'
//     "abc"    -   first non repeating character 'a'
//     "abca"   -   first non repeating character 'b'
//     "abcab"  -   first non repeating character 'c'
//     "abcabc" -   no non repeating character so '#'

module.exports = {
     solve : function(A){
       let a=A
   let obj={}
   let queue=[]
   let res=``
   for(let i=0;i<a.length;i++){
     if (obj[a[i]]) {
       obj[a[i]]++
     }else{
       obj[a[i]]=1
     }
     queue.push(a[i])
     while (obj[queue[0]]>1) {
       queue.shift()
     }
     let curr=queue.length? queue[0]:`#`
    res+=curr
   }return res
     }
   };