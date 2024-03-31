const longestWord=(str)=>{

    // 1st
    let splitArray=str.trim().split(' ')
    let ans=0
    let string=''

    if(str.trim().length===0){
        return false
    }

    for(let i=0;i<splitArray.length;i++){
        if(splitArray[i].length>ans){
            string=splitArray[i];
            ans=splitArray[i].length;
        }
    }
    return string


    // 2nd
    // return splitArray.reduce((accum,current)=>{
    //     if(current.length>accum.length){
    //         return current
    //     }else{
    //         return accum
    //     }
    // },'')
}


console.log(longestWord('    I love javascript so much'))