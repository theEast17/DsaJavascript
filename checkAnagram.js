const cleanStr=(str)=>{
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
}

const checkAnagram=(str1,str2)=>{
    return cleanStr(str1) === cleanStr(str2)
}

console.log(checkAnagram('coding Money','money coding'))
