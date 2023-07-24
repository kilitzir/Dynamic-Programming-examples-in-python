// Write a function 'bestSum( targetSum, numbers) that takes in a targetSum and an array of numbers as arguments
// the function should return an array containg the shortest combination if numbers 
// that add up to exactly the targetSum
// if there's a tie, you may return any one of the shortest

// original
const bestSumOriginal =  (targetSum, numbers)=>
{
    if (targetSum == 0 ) return [];
    if (targetSum <1)  return null;
    let shortestCombination = null;
    for ( let num of numbers)
    {
        const remainder = targetSum - num;
        const remainderCombination = bestSumOriginal(remainder,numbers)
        if (remainderCombination !== null)
        {
            const combination = [...remainderCombination, num];
            if (shortestCombination  === null || combination.length < shortestCombination.length)
            {
                shortestCombination =  combination;
            }
        }
    }
    return shortestCombination;
}
// original + sort the numbers 
const bestSumOriginal1 =  (targetSum, numbers, isSorted =  true)=>
{
    if (targetSum == 0 ) return [];
    if (targetSum <1)  return null;
    if (!isSorted) {
        numbers = numbers.sort(function(a, b){return a-b});
        console.log(numbers);
     }
     if (targetSum < numbers[0])
     return null;
    let shortestCombination = null;    
    for ( let num of numbers)
    {
        const remainder = targetSum - num;
        const remainderCombination = bestSumOriginal1(remainder,numbers,true)
        if (remainderCombination !== null)
        {
            const combination = [...remainderCombination, num];
            if (shortestCombination  === null || combination.length < shortestCombination.length)
            {
                shortestCombination =  combination;
            }
        }
    }
    return shortestCombination;
}
// original + using minimum depths 
const bestSumOriginal2 =  (targetSum, numbers,CurrentMinimumDepth, currentDepth)=>
{
    if (targetSum == 0 ) return [];
    if (targetSum <1)  return null;
    if (++currentDepth > CurrentMinimumDepth) return null;
    let shortestCombination = null;

    for ( let num of numbers)
    {
        const remainder = targetSum - num;
        const remainderCombination = bestSumOriginal2(remainder,numbers,CurrentMinimumDepth,currentDepth)
        if (remainderCombination !== null)
        {
            const combination = [...remainderCombination, num];
            if (shortestCombination  === null ||  combination.length< CurrentMinimumDepth)
            {
                shortestCombination =  combination;
                CurrentMinimumDepth = combination.length;
            }
        }
    }
    return shortestCombination;
}
const bestSumMemoize =  (targetSum, numbers,memo = {})=>
{
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0 )   return [];
    if (targetSum <1)      return null;

    let shortestCombination = null;
    for ( let num of numbers)
    {
        const remainder = targetSum - num;
        const remainderCombination = bestSumMemoize(remainder,numbers,memo)
        if (remainderCombination !== null)
        {
            const combination = [...remainderCombination, num];
            if (shortestCombination  === null || combination.length < shortestCombination.length)
            {
                shortestCombination =  combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

//-------------------------------------------
const rr = 1000;
const rrr =  [1,25,5,2];
console.log("let's start")
let start = Date.now();
//console.log ("bestSumOriginal: "+bestSumOriginal(rr,rrr));
let end = Date.now();
console.log(`Execution time: ${end - start} ms`);
console.log("---------------");
start = Date.now();
//console.log ("bestSumOriginal1: "+bestSumOriginal1(rr,rrr,isSorted = false));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
console.log("---------------");
start = Date.now();
console.log ("bestSumOriginal2: "+bestSumOriginal2(rr,rrr,1000,0));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
console.log("---------------");
start = Date.now();
console.log ("bestSumMemoize: "+bestSumMemoize(rr,rrr));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
console.log("---------------");
