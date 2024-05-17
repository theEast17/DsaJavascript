const countChar=(str,char)=>{
    let string=str.toLowerCase()
    let character=char.toLowerCase()
    
    // 1st
    let count=0
    for(let i=0;i<string.length;i++){
        if(string[i]===character){
            count+=1
        }
    }
    return count

    // 2nd
    // const count=string.split('').filter((a)=>{
    //     return a===character
    // })
    // return count.length

    // 3rd

    // const total=string.split('').reduce((accum,current) => {
    //     if(current===character){
    //         accum++
    //     }
    //     return accum
    // },0)
    // return total
    
}


console.log(countChar('javascript is the boss of web','a'))