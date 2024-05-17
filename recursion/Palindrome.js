





function Palindrome(num){
    // without use of recursion 
    // let arr=[]
    // let temp=num
    // let devision;
    // while(temp>0){
    //     let modulo=temp % 10  
    //     devision=Math.floor(temp/10)  
    //     temp=devision
    //     arr.push(modulo)    
    // }

    // // let integer=+arr.join('')

    // let integer=0
    // for(let i=0;i<arr.length;i++){
    //     integer=integer*10+arr[i]
    // }

    // return integer === num

    // using recursion

    let str=num.toString()
    if (str.length <= 1) {
        return true;
      }
      
    
      if (str[0] !== str[str.length - 1]) {
        return false;
      }
    return Palindrome(str.slice(1,-1))


}


console.log(Palindrome(1221))