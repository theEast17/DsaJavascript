// function recursion(num){
//     let i=5
//     if(num>i) return false
//     if(num===i) return true
//     console.log(num)
//     return recursion(num+1)
// }
// console.log(recursion(1))

function multiplyArr(arr){
    // using simple loop
    // let result=1
    // for(let i=0;i<arr.length;i++){
    //     result*=arr[i]
    // }
    // return result


    // using recursion

    // 5 * [1,2,3,4] 
    // 5 * 4 * [1,2,3]
    // 5 * 4 * 3 * [1,2]
    // 5 * 4 * 3 * 2 * [1]
    // 5 * 4 * 3 * 2 * 1 []

    if(arr.length<=0) return 1
    return arr[arr.length-1] * multiplyArr(arr.slice(0,arr.length-1))


}

console.log(multiplyArr([1,2,3,4,5]))


