// madam   === true
// kayak   === true
// dog === false
const Palindromecheck = (str) => {
    // const reverse=str.split('').reverse().join('')
    // return reverse === str;

    let removeUnNecessaryData=str.replace(/[\W_]/g,'')
    let result=''

    for(let i=removeUnNecessaryData.length-1;i>=0;i--){
        result+=removeUnNecessaryData[i]
    }
    return result === removeUnNecessaryData


}

console.log(Palindromecheck('mmad_;.am$%$%%$'))

