// Write a function 'howSum(targetSum,numbers) that take in a target sum and an array as arguments
//The function should return an array containing any combination of elements that 
// add up to exactly the target su, If there is no combination that adds up to the
// targetSum, then return null
// If there multiple combinations possible, you may return any single one
const howSumoriginal = (targetSum,numbers) => 
{
    //console.log("targetsum: " + targetSum);
    if (targetSum == 0 ) 
        return [];
    if (targetSum < 0 )
        return null;

    for (let num of numbers)
    {
        const remainder = targetSum - num;
        const r = howSumoriginal(remainder,numbers)
        if ( r!== null)
        {
            return [...r,num]
        }
    }
    return null;
};
const howSumoriginal1 = (targetSum,numbers,sorted = false) => 
{
    //console.log("targetsum: " + targetSum);
    if (targetSum == 0 ) 
        return [];
    if (targetSum < 0 )
        return null;
    if (!sorted) {
        numbers = numbers.sort(function(a, b){return a-b});
        console.log(numbers);
    }
    if (targetSum < numbers[0])
         return null;
    for (let num of numbers)
    {
        const remainder = targetSum - num;
        const r = howSumoriginal1(remainder,numbers,true)
        if ( r !== null)
        {
            return [...r,num]
        }
    }
    return null;
};
const howSumMemo = (targetSum,numbers,memo={}) => 
{
    if (targetSum in memo) 
        return memo[targetSum];
    if (targetSum === 0 ) 
        return [];
    if (targetSum < 0 )
        return null;
    
    for (let num of numbers)
    {
        const remainder = targetSum - num;
        const r = howSumMemo(remainder,numbers,memo,true)
        if ( r !== null)
        {
            memo[targetSum] = [...r,num];
            console.log(memo[targetSum]);
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};
const howSumMemo1 = (targetSum,numbers,memo={},sorted = false) => 
{
    if (targetSum in memo) 
        return memo[targetSum];
    if (targetSum === 0 ) 
        return [];
    if (targetSum < 0 )
        return null;
    if (!sorted) {
        numbers = numbers.sort(function(a, b){return a-b});
        console.log(numbers);
    }    
    if (targetSum < numbers[0])
        return null; 
    for (let num of numbers)
    {
        const remainder = targetSum - num;
        const r = howSumMemo1(remainder,numbers,memo,true)
        if ( r !== null)
        {
            memo[targetSum] = [...r,num];
            console.log(memo[targetSum]);
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};


let start = Date.now();
let rr = 20000
console.log("howSumoriginal: "+howSumoriginal(rr,[7,14]));
let end = Date.now();
console.log(`Execution time: ${end - start} ms`);

start = Date.now();
console.log("howSumoriginal: "+ howSumoriginal1(rr,[7,14]));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);

start = Date.now();
rr = 300
console.log("howSumMemo: "+ howSum(rr,[7,14]));
 end = Date.now();
console.log(`Execution time: ${end - start} ms`);

start = Date.now();
console.log("howSumMemo1: "+ howSum1(rr,[7,14]));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);

