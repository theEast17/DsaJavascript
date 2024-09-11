const sortArray = (arr) => {
    // 1st
    // return arr.sort((a,b)=>a-b)

    // 2nd
    let sortedArray = []   //1
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
    return arr
}

console.log(sortArray([100, 34, 22, 44, 67, 43, 101]))