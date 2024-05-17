

const rangeNumber=(start,end)=>{
    

    // rangeNumber(0,5)  [0,1,2,3,4,5]
    // rangeNumber(0,4)  [0,1,2,3,4]
    // rangeNumber(0,3)  [0,1,2,3]
    // rangeNumber(0,2)  [0,1,2]
    // rangeNumber(0,1)  [0,1]
    // rangeNumber(0,0)  [0]
    // rangeNumber(0,-1) []


    // if(end<start){
    //     return []
    // }
    // let num=rangeNumber(start,end-1)
    // num.push(end)
    // return num


    if(start===end+1){
        return []
    }
    let arr=rangeNumber(start+1,end)
    arr.unshift(start)
    return arr

}


console.log(rangeNumber(0,5))