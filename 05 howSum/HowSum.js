// Write a function 'howSum(targetSum,numbers) that take in a target sum and an array as arguments
//The function should return an array containing any combination of elements that 
// add up to exactly the target su, If there is no combination that adds up to the
// targetSum, then return null
// If there multiple combinations possible, you may return any single one
const howSumoriginal = (targetSum,numbers) => 
{
    
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
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0 )  return [];
    if (targetSum < 0 )    return null;
    
    for (let num of numbers)
    {
        const remainder = targetSum - num;
        const r = howSumMemo(remainder,numbers,memo,true)
        if ( r !== null)
        {
            memo[targetSum] = [...r,num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};
const howSumMemo1 = (targetSum,numbers,memo={},sorted = false) => 
{
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0 )  return [];
    if (targetSum < 0 )    return null;
    if (!sorted) numbers = numbers.sort(function(a, b){return a-b});
    if (targetSum < numbers[0]) return null; 
    
    for (let num of numbers)
    {
        const remainder = targetSum - num;
        const r = howSumMemo1(remainder,numbers,memo,true)
        if ( r !== null)
        {
            memo[targetSum] = [...r,num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};
/**
 * 
 */
const howSumTab = (targetSum,numbers) => 
{
    const table = Array(targetSum+1).fill(null);
    table[0] = [];
    for (let i=0;i<=targetSum;i++)
    {
        if (table[i] != null) //scores[10] === undefined)
        {
            for (let num of numbers)
            {
                table[i+num] = [...table[i],num];
                console.log(`i+num ${i+num} : ${table[i+num]}`)
            }
        }
    }
    console.log(table);
    return table[targetSum];
}

/*
let r = 9742 // 1001:true, 300=false, 8561=true, 856961=true, 12751=true
let rr = [7,15];
*/


let start = Date.now();
let r = 100
let rr = [5,10];
console.log("howSumoriginal: "+howSumoriginal(r,rr));
let end = Date.now();
console.log(`Execution time: ${end - start} ms`);

start = Date.now();
console.log("howSumoriginal: "+ howSumoriginal1(r,rr));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);

start = Date.now();
console.log("howSumMemo: "+ howSumMemo(r,rr));
 end = Date.now();
console.log(`Execution time: ${end - start} ms`);


start = Date.now();
console.log("howSumTab: "+ JSON.stringify(howSumTab(r,rr)));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);

