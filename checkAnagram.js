// 1st
// const cleanStr=(str)=>{
//     return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
// }

// const checkAnagram=(str1,str2)=>{
//     return cleanStr(str1) === cleanStr(str2)
// }

// console.log(checkAnagram('coding Money','money coding'))


// 2nd

const charMap = (str) => {
    const anagramObj = {}
    let string = str.toLowerCase().replace(/\W/g, '')
    for (let i = 0; i < string.length; i++) {
        if (anagramObj[string[i]]) {
            anagramObj[string[i]] = anagramObj[string[i]] + 1
        } else {
            anagramObj[string[i]] = 1
        }
    }
    return anagramObj
}

const checkAnagram = (str1, str2) => {
    let string1 = charMap(str1)
    let string2 = charMap(str2)

    let str1Keys = Object.keys(string1)  
    let str2Keys = Object.keys(string2)

    if(str1Keys.length !== str2Keys.length){
        return false
    }

    for(let key in string1){
        if(string1[key]!==string2[key]) return false
    }
    return true

}

console.log(checkAnagram('coding Money', 'money coding'))