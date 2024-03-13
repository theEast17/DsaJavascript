// helloooo === o
// chareee   === e
// abcd123444332 === 4


const maxChar = (str) => {
    const charMap = {}
    let count = 0
    let maxChar = ''

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
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


console.log(maxChar('abcd12444332'))