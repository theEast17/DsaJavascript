const secondLargest = (arr) => {
    // 1st
    // const removeDublicate=Array.from(new Set(arr))
    // return removeDublicate.sort((a,b)=>a-b).at(-2)

    // 2nd
    let largest = -Infinity   //12 23 43 54
    let secondLargest = -Infinity  //-1 13 23 43

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest

}


console.log(secondLargest([12, 2, 23, 13, 23, 43, 54, 34]))