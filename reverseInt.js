// exmaples reverse(12) === 21
// reverse (1122)  === 2211
// reverse (109909)  === 909901
// reverse (-15) === -51
// reverse (-90) === -9

// 1st
// function reverse(n) {
//    const reversed=n.toString().split('').reverse().join('')
//    return parseInt(reversed) * Math.sign(n);     //if number is -10 -> -1 , 10 -> 1
// }

// console.log(reverse(-21))


// 2nd
function reverseNumber(num) {
    let numString = num.toString();   //if number is -10 -> 10 , 10 -> 10
    let reversedString = '';
    for (let i = numString.length - 1; i >= 0; i--) {
        reversedString += numString[i];
    }
    let reversedNumber = parseInt(reversedString);
    if (num < 0) {
        reversedNumber = reversedNumber * -1;
    }
    return reversedNumber;
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));


