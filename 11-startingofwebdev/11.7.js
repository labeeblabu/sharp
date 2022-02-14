// Start watching the video from here

// https://www.youtube.com/watch?v=hdI2bqOjy3c&t=3203s



// Functions



// Write a function to take temperature in degree celcius and return in degree kelvin
// Take the same function and add one more argument to it, "conversionUnit".Based on the conversionUnit , return value of temperature in Celcius or Kelvin


// function convertTemp(temperatureValue, conversionUnit){



// //based on conversion unit return output in Celcius or Kelvin



// }

// SAMPLE INPUT OUTPUT 2

// Input

// convertTemp(35, K)



// Output

// 273+35 = 308K



// SAMPLE INPUT OUTPUT1



// Input

// convertTemp(308, C)



// Output

// 308-273 = 35C



// Use ternary operator instead of IF condition

let convertTemp=(temp,unit)=>{return unit===`C`?temp-273:temp+273}

console.log(convertTemp(308,`C`));

console.log(convertTemp(35,`K`));