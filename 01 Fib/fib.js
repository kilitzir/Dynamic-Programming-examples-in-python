// Write a function fib(n) that takes in a number as an argument.
// The function should return the n-th number of the fibonacci sequence
// The 1st and second number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two
// Time O(2^n)
// Space O (n)

const fibOriginal = (n) => 
{
    if (n <=2) return 1;
    return fibOriginal(n-1) + fibOriginal (n-2)
};
const fibmemoized = (n, memo={}) => 
{
    if (n in memo){
        return memo[n];
    }
    if (n <=2) return 1;
    memo[n] = fibmemoized(n-1,memo) + fibmemoized (n-2,memo);
    return memo[n];
};
const fibTabular =  (n) =>
{
const table = Array(n+1).fill(0);

for (let i=0;i<=n;i++) 
{
table[i+1] += table[i];
table[i+2] += table[i];
}
return table[n];
}
// Wrong
const fibTabular1 =  (n) =>
{
let x = 1;
let z = 1;
for (let i=2;i<n;i++) 
{
    [x,z] = [z,x];
    z += x;
}
return z;
}

let start, end
let r = 100

start = Date.now();
console.log ("fibOriginal: "+fibOriginal(r));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);

start = Date.now();
console.log ("fibmemoized: "+fibmemoized(r));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);

start = Date.now();
console.log ("vfibTabular: "+ fibTabular(r));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);

start = Date.now();
console.log ("vfibTabular1: "+ fibTabular1(r));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
