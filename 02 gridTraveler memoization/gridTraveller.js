// Say that you are a traveller on a 2D grid.
// You begin in the top-left corner and your goal is to travel to the bottom-right corner.
// You may only move down or right

// In how many ways can you travel to the goal on a grid with dimensions m*n?
const gridTravellerOriginal = (n,m) =>
{
    if (n == 0 || m == 0) return 0;
    if (n == 1 && m ==1)  return 1;
    let r = gridTravellerOriginal(n-1,m)+gridTravellerOriginal(n,m-1)
    return r;
}
const gridTravellerMemoized = (n,m, memo={}) =>
{
    const key = m+','+n;
    if ( key in memo)  return memo[key];
    
    if (n == 0 || m == 0) return 0;
    if (n == 1 && m == 1)  return 1;

    let r = gridTravellerMemoized(n-1,m,memo)+gridTravellerMemoized(n,m-1,memo)
    memo[key] = r;
    return r;
}
//TODO: Declare the array
const gridTravellerTab =  (n,m) =>
{
    table =  Array(m+1).fill().map(()=>Array(n+1).fill(0));
    console.log(table);
    table[1][1] = 1;
    console.log(table)
    for (let i = 0;i<m;i++)
    {
        for (let j = 0;j<m;j++) {
            const currrentElement = table[i][j];
            if (j+1<=n) table[i,j+1] += currrentElement;
            if (i+1<=m) table[i+1,1] += currrentElement;
        }
    }
    console.log(table)
    return table[m,n];
}

let start,end;
start = Date.now();
//console.log("gridTravellerOriginal:" + gridTravellerOriginal( 16,16));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
start = Date.now();
console.log("gridTravellerMemoized: "+gridTravellerMemoized( 116,116));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
start = Date.now();
console.log("gridTravellerTab: " + gridTravellerTab( 3,2));
end = Date.now();
console.log(`Execution time: ${end - start} ms`);
