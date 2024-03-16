// madam   === true
// kayak   === true
// dog === false
const Palindromecheck = (str) => {
    const reverse=str.split('').reverse().join('')
    return reverse === str;
}


console.log(Palindromecheck('madam'))

