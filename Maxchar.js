// helloooo === o
// chareee   === e
// abcd123444332 === 4
// love is powerful than money  === o


const maxChar = (str) => {
    const removeSpaceString=str.replace(/\s/g, '');
    const charMap = {}
    let count = 0
    let maxChar = ''

    for (let i = 0; i < removeSpaceString.length; i++) {
        const char = removeSpaceString[i]
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1
        } else {
            charMap[char] = 1
        }
    }

    for (let key in charMap) {
        if (charMap[key] > count) {
            count = charMap[key]
            maxChar=key
        }
    }
    return `Character = ${maxChar} and Length = ${count}`

}


console.log(maxChar('love is more powerful than money'))