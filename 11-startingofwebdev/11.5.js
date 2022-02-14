
// Task Description
// Follow the youtuber and experiment with all the APIs available with arrays

// (unshift, push,pop, Array, indexOf)



// https://www.youtube.com/watch?v=hdI2bqOjy3c&t=1433s



// Deliverable



// Experiment with the API and paste the code here
let array=[`apple`,`mango`,`grapes`]
array.push(`pineapple`)
array.push(`watermelon`)
array.pop()
array.unshift(1)
array.shift()
console.log(array);
console.log(array.indexOf(`apple`))
console.log(Array.isArray(`hello`));



//next qn is
let arr=[1000, 11, 445, 1, 330, 3000]
function maxMin(arr) {
  let max=min=arr[0]
  for(let i=0;i<arr.length;i++){
    if (arr[i]>max) {
      max=arr[i]
    }
    if (min>arr[i]) {
      min=arr[i]
    }
  }
  console.log(`min=${min} max=${max}`);
}
maxMin(arr)