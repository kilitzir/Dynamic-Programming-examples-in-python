// Write a function fib(n) that takes in a number as an argument.
// The function should return the n-th number of the fibonacci sequence
// The 1st and second number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two
// Time O(2^n)
// Space O (n)

const fib = (n) => 
{if (n <=2) return 1;
    return fib(n-1) + fib (n-2)
};
const start = Date.now();

console.log (fib(40));

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);