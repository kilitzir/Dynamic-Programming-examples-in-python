// Write a function 'cansum(targetSum,numbers)' that takes in a target sum and an array of numbers 
// as arguments
//The function should return a boolean indicating whether or not it is possible to generate the target sum
// using numbers from the array.
// You may use an element of the array as many times as needed
// You may assume that all numbers are nonnegative

const canSum = (targetSum,numbers) => 
{
    //console.log("targetsum: " + targetSum);
    if (targetSum == 0 ) 
        return true;
    if (targetSum < 0 )
        return false;
    for (let num of numbers)
    {
        const remainder = targetSum - num;
        if (canSum(remainder,numbers) == true)
        {
            return true;
        }
    }
    return false;
};
// trying to improve by sorting the values and if the first value> target, return false and don't check the 
// rest of the array
const canSum1 = (targetSum,numbers, sorted = false) => 
{
    //console.log("targetsum: " + targetSum);    
    if (targetSum == 0 ) 
    return true;
     if (targetSum < 0 )
     return false;
     if (!sorted) {
        numbers = numbers.sort(function(a, b){return a-b});
        console.log(numbers);
     }
    
    for (let num of numbers)
    {
        const remainder = targetSum - num;
        if (canSum1(remainder,numbers,true) == true)
        {
            return true;
        }
    }
    return false;
};
const canSumMemo = (targetSum,numbers,memo={}) => 
{
    //console.log("targetsum: " + targetSum);
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum == 0 ) 
        return true;
    if (targetSum < 0 )
        return false;
    for (let num of numbers)
    {
        const remainder = targetSum - num;
        if (canSum(remainder,numbers,memo) == true)
        {
            memo[remainder] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};
const canSumTab =  (targetSum,numbers) =>
{
    const table = Array(targetSum+1).fill(false);
    table[0] =  true;
    for (let i=0;i<=targetSum;i++)
    {
        if (!table[i]) continue;

        for (let num of numbers)
        {
            if (i+num<= targetSum)
                table[i+num] = true;

        }
    }
    return table[targetSum];
};

let r = 300
let rr = [7,14]
let start = Date.now();
console.log ("canSum: "+canSum(r, rr));
let end = Date.now();
console.log(`Execution time: ${end - start} ms`);

 start = Date.now();
 console.log ("canSum1: "+canSum1(r, rr));
 end = Date.now();
console.log(`Execution time: ${end - start} ms`);

start = Date.now();
 console.log ("canSummemo: "+canSumMemo(r, rr));
 end = Date.now();
console.log(`Execution time: ${end - start} ms`);

start = Date.now();
console.log ("canSumTab: "+ canSumTab(r, rr));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);

