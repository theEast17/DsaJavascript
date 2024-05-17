const hashTagGenerator=(str)=>{
    let splitArray=str.trim().split(' ')
    if(str.trim().length===0 || str.length>280){
        return false
    }

    // 1st
    let output='#'
    for(let i=0;i<splitArray.length;i++){
       splitArray[i] = splitArray[i][0].toUpperCase() + splitArray[i].slice(1)
    }
    let hashtagString=output + splitArray.join('')
    return hashtagString


    // 2nd

    // const generateHash=splitArray.map((arr)=>{
    //     return arr[0].replace(arr[0],arr[0].toUpperCase()) + arr.slice(1)
    // })
    // return '#' + generateHash.join('')

}


console.log(hashTagGenerator('  Leading Trailing   '))