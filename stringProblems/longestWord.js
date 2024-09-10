const longestWord=(str)=>{

    // 1st

    let withoutSplit=str.trim()
    let result=0


    let splitArray=str.trim().split(" ")
    let ans=0
    let string=''

    if(str.trim().length===0){
        return false
    }

// without using split method
    // for(let i=0;i<withoutSplit.length;i++){
    //     if(withoutSplit[i]!==" "){
    //         ans=ans+1
    //     }else{
    //         if(ans>result){
    //             result=ans 
    //             ans=0
    //             string=withoutSplit.substr(i-result,result)
    //         }
    //     }
    // }

    // return string

    // with split

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

// let str='purvnagar'
// console.log(str.substring(1,3))
// console.log(str.slice(1,3))
// console.log(str.substr(3,3))