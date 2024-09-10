function fizzBuzz(n){

    let result=[]
    for(let i=1;i<=n;i++){
        if(i%3===0 && i%5!==0){
            result.push('fizz')
        }
        if(i%3!==0 && i%5===0){
            result.push('buzz')
        }
        if(i%3===0 && i%5===0){
            result.push('fizbuzz')
        }
        if(i%3!==0 && i%5!==0){
            result.push(i.toString())
        }
    }

    console.log(result)


}


return fizzBuzz(5)
