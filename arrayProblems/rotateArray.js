
const rotateArray = (arr, value) => {
    // in this technique current array is change  1st
    // const cutArray = arr.splice(arr.length - value, value)
    // return cutArray.concat(arr)

    //  in this current array is not changed  2nd
    // const cutArray=arr.slice(-value)
    // console.log(cutArray)
    // return cutArray.concat(arr.slice(0,arr.length-value))


    // without using built in methods 3rd
    let rotatedArray=[]
    let index=0

    for(let i=arr.length-value;i>0;i++){
        if(i===arr.length){
            break
        }
        rotatedArray[index]=arr[i]
        index++
    }

    for(let i=0;i<arr.length-value;i++){
        rotatedArray[value+i]=arr[i]
    }

    return rotatedArray

}


console.log(rotateArray([1, 2, 3, 4, 5], 4))