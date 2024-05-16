// [1,1,2]=> output=2 [1,2]

const removeDeuplicate = (arr) => {

    // with method
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === arr[i + 1]) {
    //         arr.splice(i + 1, 1)
    //         i--
    //     }
    // }
    // return arr

    // without method
    // let i = 0
    // for (let j = 0; j < arr.length; j++) {
    //     if (arr[j] !== arr[j + 1]) {
    //         i++
    //     }
    // }
    // return i

    // let result=[]
    // let count=0
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]!==arr[i+1]){
    //         result[count]=arr[i]
    //         count++
    //     }
    // }
    // return result
}


console.log(removeDeuplicate([0, 0, 1, 1, 1, 2, 2, 3, 4]))