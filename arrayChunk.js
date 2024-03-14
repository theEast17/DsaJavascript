// [1,2,3,4,5,6,7,8],3 -> [[1,2,3],[4,5,6],[7,8]]
// [1,2,3,4,5,6,7,8],2 -> [[1,2],[3,4],[5,6],[7,8]]
// [1,2,3,4,5,6,7,8],1 -> [[1],[2],[3],[4],[5],[6],[7],[8]]
// [1,2,3,4,5,6,7,8],10 -> [[1,2,3,4,5,6,7,8]]

const arrayChunk = (array, devider) => {
    let chunkArray = []
    let index = 0
    for (let i = 0; i < array.length / devider; i++) {
        if (array.length > devider) {
            chunkArray.push(array.slice(index, devider + index))
            index = index + devider
        } else {
            return array
        }
    }
    return chunkArray
}

console.log(arrayChunk([1, 2, 3, 4, 5, 6,7,8], 10))
