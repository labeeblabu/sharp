// Given an integer n, return the number of prime numbers that are strictly less than n.

 

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0
var countPrimes = function(n) {
	// Assume all the numbers are prime initially
    let primes = new Array(n+1).fill(1);
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (primes[i] === 1) {
            count++;
			// set the multiples of current index as non prime each time
            for (let j = i * i; j <= n; j += i) {
                primes[j] = 0;
            }
        }        
    }
    
    return count;
};
//or  
const countPrimes = (n) => {
    let count = 0;
    const isPrime = Array(n).fill(true);
    for (let i = 2; i < n; i++) {
      if (isPrime[i]) {
        count++;
        for (let j = i; j < n; j += i) isPrime[j] = false; // sieve out multiples
      }
    }
    return count;
  };
  //or   
  const countPrimes = (n, count = 0, array = []) => {
    for (let i = 2; i < n; i++) {
      if (array[i]) continue
      else count++
      for (let j = i+i; j <= n; j+=i) array[j] = true
    }
    
    return count
  };