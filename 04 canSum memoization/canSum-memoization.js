// Write a function 'cansum(targetSum,numbers)' that takes in a target sum and an array of numbers 
// as arguments
//The function should return a boolean indicating whether or not it is possible to generate the target sum
// using numbers from the array.
// You may use an element of the array as many times as needed
// You may assume that all numbers are nonnegative

// Write a function 'cansum(targetSum,numbers)' that takes in a target sum and an array of numbers 
// as arguments
//The function should return a boolean indicating whether or not it is possible to generate the target sum
// using numbers from the array.
// You may use an element of the array as many times as needed
// You may assume that all numbers are nonnegative

const canSum = (targetSum,numbers,memo={}) => 
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


let start = Date.now();

console.log (canSum(10000, [7,14]));

let end = Date.now();
console.log(`Execution time: ${end - start} ms`);
 start = Date.now();


 end = Date.now();
console.log(`Execution time: ${end - start} ms`);
