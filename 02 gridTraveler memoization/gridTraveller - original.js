// Say that you are a traveller on a 2D grid.
// You begin in the top-left corner and your goal is to travel to the bottom-right corner.
// You may only move down or right

// In how many ways can you travel to the goal on a grid with dimensions m*n?
const gridTraveller = (n,m) =>
{
    if (n == 0 || m == 0)
    return 0;
    if (n == 1 && m ==1)
    return 1;
    let r = gridTraveller(n-1,m)+gridTraveller(n,m-1)
    return r;
}
const start = Date.now();

console.log(gridTraveller( 16,16));

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
