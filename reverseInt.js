// exmaples reverse(12) === 21
// reverse (1122)  === 2211
// reverse (109909)  === 909901
// reverse (-15) === -51
// reverse (-90) === -9


function reverse(n) {
   const reversed=n.toString().split('').reverse().join('')
   return parseInt(reversed)  * Math.sign(n)
}

console.log(reverse(109909))
