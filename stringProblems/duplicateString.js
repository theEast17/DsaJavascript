// Input: S = “geeksforgeeks”
// Output:

// e, count = 4
// g, count = 2
// k, count = 2
// s, count = 2


function duplicate(str){
    let string=str.toLowerCase()
    let obj={}
    for(let i=0;i<string.length;i++){
        if(obj[string[i]]){
            obj[string[i]]+=1
        }else{
            obj[string[i]]=1
        }
    }
    
    let result=[]

    for(let key in obj){
        if(obj[key]>1){
            result.push({[key]:obj[key]})
        }
    }
    return result
}

console.log(duplicate('geeksforgeeks'))




