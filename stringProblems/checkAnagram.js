// 1st
// const cleanStr=(str)=>{
//     return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
// }

// const checkAnagram=(str1,str2)=>{
//     return cleanStr(str1) === cleanStr(str2)
// }

// console.log(checkAnagram('coding Money','money coding'))


// 2nd

// const charMap = (str) => {
//     const anagramObj = {}
//     let string = str.toLowerCase().replace(/\W/g, '')
//     for (let i = 0; i < string.length; i++) {
//         if (anagramObj[string[i]]) {
//             anagramObj[string[i]] = anagramObj[string[i]] + 1
//         } else {
//             anagramObj[string[i]] = 1
//         }
//     }
//     return anagramObj
// }

// const checkAnagram = (str1, str2) => {
//     let string1 = charMap(str1)
//     let string2 = charMap(str2)

//     // this line of code only for 35 line 
//     let str1Keys = Object.keys(string1)  
//     let str2Keys = Object.keys(string2)
//     if(str1Keys.length !== str2Keys.length){
//         return false
//     }

//     for(let key in string1){
//         if(string1[key]!==string2[key]) return false
//     }
//     return true

// }

// console.log(checkAnagram('coding Money', 'money coding'))


function checkAnagram(str1,str2){
    let string1=str1.replace(/[^A-Za-z]/g,'').toLowerCase().split('')
    let string2=str2.replace(/[^A-Za-z]/g,'').toLowerCase().split('')


    for(let i=0;i<string1.length;i++){
        if(string2.includes(string1[i])){
            let findindex=string2.indexOf(string1[i])
            string2.splice(findindex,1)
        }else{
            return 'It is not Anagram'
        }
    }

    if(string2.length===0) return 'Anagram'


}

console.log(checkAnagram('coding Money', 'money coding'))

