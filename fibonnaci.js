// 0 1 1 2 3 5 8 13 21 34 55 

let fibonacci = (number) => {

    // fibonacci using simple 
    // if(number <= 1){
    //     return number
    // }

    // let before=0;  
    // let after=1;
    // let ans=0;
    // let arr=[] 
    // for(let i=2;i<number;i++){
    //    ans=before+after;   
    //    before=after   
    //    after=ans  
    //    arr.push(ans)
    // }
    // return arr.at(-1)


    // fibonacci using recursion

    return number <= 1 ? number : fibonacci(number - 1) + fibonacci(number - 2)

}

console.log(fibonacci(7));



