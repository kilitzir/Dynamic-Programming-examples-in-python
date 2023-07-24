// Write a function 'canConstruct(target, wordbank) that accepts a target string and an array of strings
// The function should return a boolean indicating whether or not the target can be constructed by concatenating
// elements from the wordbank array.

// You may reuse elements from the 'wordBank' as many as you like. Empty array should return true.
// You may take out chars ONLY from the beginning of the string (i.e. prefixes)
const canConstructOriginal = (target, wordBank) =>
{
    if (target === '')
        return true;
    for (let word of wordBank)
    {
        if (target.indexOf(word) === 0)
        {
            const suffix = target.slice(word.length);
            let bool1 = canConstructOriginal(suffix, wordBank)
            if (bool1)
                return true;
        }
    }
    return false;
};
const canConstructOriginal1 = (target, wordBank,isSorted =  false) =>
{
    if (!isSorted) 
    {
        wordBank = wordBank.sort();
        console.log(wordBank);
    }

    if (target === '')
        return true;
    for (let word of wordBank)
    {
        if (target.indexOf(word) === 0)
        {
            const suffix = target.slice(word.length);
            let bool1 = canConstructOriginal(suffix, wordBank,true)
            if (bool1)
                return true;
        }
    }
    return false;
};
const canConstructMemoized = (target, wordBank,memo={}) =>
{
    if (target in memo) return memo[target]; 
    if (target === '')  return true;

    for (let word of wordBank)
    {
        if (target.indexOf(word) === 0)
        {
            const suffix = target.slice(word.length);
            let bool1 = canConstructMemoized(suffix, wordBank,memo)
            if (bool1)
            {
                memo[target] =  true;
                return true;
            }
        }
    }
    memo[target] =  false;
    return false;
};

const rr = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
const rrr =  ["ee","eee"];
let start, end;
console.log("let's start")
console.log(" --- original --- ")
start = Date.now();
console.log ("canConstruct: " + canConstructOriginal(rr,rrr));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
console.log(" --- Array ---")
start = Date.now();
console.log ("canConstruct also: " + canConstructOriginal1(rr,rrr,false));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
console.log(" --- -memoized --- ")
start = Date.now();
console.log ("canConstructMemo: " + canConstructMemoized(rr,rrr));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
console.log("----- END ----------");