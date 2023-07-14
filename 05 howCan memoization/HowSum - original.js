// Write a function 'howSum(targetSum,numbers) that take in a target sum and an array as arguments
//The function should return an array containing any combination of elements that 
// add up to exactly the target su, If there is no combination that adds up to the
// targetSum, then return null
// If there multiple combinations possible, you may return any single one
const howSum = (targetSum,numbers) => 
{
    //console.log("targetsum: " + targetSum);
    if (targetSum == 0 ) 
        return [];
    if (targetSum < 0 )
        return null;

    for (let num of numbers)
    {
        const remainder = targetSum - num;
        const r = howSum(remainder,numbers)
        if ( r!== null)
        {
            return [...r,num]
        }
    }
    return null;
};
const howSum1 = (targetSum,numbers,sorted = false) => 
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
        const r = howSum1(remainder,numbers,true)
        if ( r !== null)
        {
            return [...r,num]
        }
    }
    return null;
};
let start = Date.now();
const rr = 300
console.log(howSum(rr,[7,14]));

let end = Date.now();
console.log(`Execution time: ${end - start} ms`);
 start = Date.now();
 console.log(howSum1(rr,[7,14]));

 end = Date.now();
console.log(`Execution time: ${end - start} ms`);
