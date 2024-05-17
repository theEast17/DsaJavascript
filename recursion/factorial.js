
function factorial(n){
    // 5 * (5-1)
    // 5 * 4 (4-1)
    // 5 * 4 * 3 (3-1)
    // 5 * 4 * 3 * 2 (2-1)
    // 5 * 4 * 3 * 2 * 1 (1-1)
    if(n<=0) return 1
    return n * factorial(n-1)
}

console.log(factorial(5))