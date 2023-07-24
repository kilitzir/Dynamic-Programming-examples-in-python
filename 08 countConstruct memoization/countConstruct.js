// Write a function 'countconstruct(target, worBank)' that accepts a target string and an array of strings
// The function should return the number of ways that the 'target' can be costructed by concatenating 
// elements from the 'wordbank' array
// You may reuse elements of 'Wordbank' as many times as needed

const countConstructOriginal = (target, wordBank) =>
{
    if (target === '') return 1;
    let sum = 0;
    for (let word of wordBank)
    {
        if (target.indexOf(word) === 0)
        {
            const suffix = target.slice(word.length);
            sum  += countConstructOriginal(suffix, wordBank)

        }
    }
    return sum;
};
const countConstructMemoized = (target, wordBank, memo={}) =>
{
    if (target in memo) return memo[target];
    if (target === '') return 1;
    let sum = 0;
    for (let word of wordBank)
    {
        if (target.indexOf(word) === 0)
        {
            const suffix = target.slice(word.length);
            sum  += countConstructMemoized(suffix, wordBank,memo)

        }
    }
    memo[target] = sum;
    return sum;
};



const rr = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

const rrr =  ["ee","eee"];
let start, end;
console.log("let's start")
console.log(" --- original --- ")
start = Date.now();

console.log ("countConstruct original: " + countConstructOriginal(rr,rrr));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
console.log(" --- original --- ")
start = Date.now();

console.log ("countConstructMemoized: " + countConstructMemoized(rr,rrr));
end = Date.now();

console.log(`Execution time: ${end - start} ms`);