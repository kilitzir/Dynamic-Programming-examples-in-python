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
    if (targetSum < numbers[0])
        return false;
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
let start = Date.now();

console.log (canSum(250, [7,14,9,26]));

let end = Date.now();
console.log(`Execution time: ${end - start} ms`);
 start = Date.now();
 console.log (canSum1(250, [13, 19, 27]));

 end = Date.now();
console.log(`Execution time: ${end - start} ms`);
