// Write a function 'allConstruct(target, wordBank)' that acccepts a target string and an array of strings
//The function should return a 2D array containing all the ways that the target can be sonstructed by 
// concatenating elements from the wordBank array.
// You may reuse elements from the 'wordBank' as many as you like. Empty string should return empty array
// if it isn't possible, return an empty array, an em
// You may take out chars ONLY from the beginning of the string (i.e. prefixes)
const allConstructOriginal = (target, wordBank) =>
{
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank)
    {
        if (target.indexOf(word) === 0)
        {
            const suffix = target.slice(word.length);
            const suffixways = allConstructOriginal(suffix, wordBank)
            const targetWays = suffixways.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    return result;
};
const allConstructMemoized = (target, wordBank,memo={}) =>
{
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank)
    {
        if (target.indexOf(word) === 0)
        {
            const suffix = target.slice(word.length);
            const suffixways = allConstructMemoized(suffix, wordBank,memo)
            const targetWays = suffixways.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
};
const allConstructTab = (target, wordBank) =>
{
    const table = Array(target.length+1).fill().map(() =>[])// a table of arrays
    table[0] = [[]];
    for ( let i = 0; i<target.length; i++)
    {
        for (let word of wordBank)
        {
            if (target.slice(i,i + word.length) == word) {
                const combinations1 = table[i].map(subArray => [...subArray,word])
                table[i+word.length].push(...combinations1) 
            }

        }
    }
    return table[target.length];
}

let rr = "purple";
const rrr =  ['purp','p','ur','le','purpl'];
let start, end;
console.log("let's start")
console.log(" --- original --- ")
start = Date.now();
console.log("canConstruct original: " + JSON.stringify(allConstructOriginal(rr, rrr)));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
console.log(" --- memoized --- ")
start = Date.now();
console.log("canConstruct memoized: " + JSON.stringify(allConstructMemoized(rr, rrr)));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
start = Date.now();
console.log("canConstructTab: " + JSON.stringify(allConstructTab(rr, rrr)));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
