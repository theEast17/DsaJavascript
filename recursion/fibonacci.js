// 0 1 1 2 3 5 8 13 21 34


function fibonacci(n){
    // without recursion
    // let arr=[0,1]
    // if(n<=1){
    //     return n
    // }
    // for(let i=2;i<=n;i++){
    //     arr[i]=arr[i-1]+arr[i-2]
    // }
    // return arr.at(-1)

    // with recursion


    //4 + 3 
    if(n<=1){
        return n
    }

    // fib(4)+fin(3) 
    // fib(3)+fib(2)                    , fib(2)+fib(1)
    // fib(2)+fib(1),fib(1)+fib(0)      fib(1)+fib(0),fib(0)+fib(-1)
    // fib(1)+fib(0)
    return fibonacci(n-1) + fibonacci(n-2)


}

console.log(fibonacci(5))