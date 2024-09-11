function sortString(str) {
    let chars = [];
    for (let i = 0; i < str.length; i++) {
        chars.push(str[i]);
    }


    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < chars.length - i - 1; j++) {
            if (chars[j] > chars[j + 1]) {
                let temp = chars[j];
                chars[j] = chars[j + 1];
                chars[j + 1] = temp;
            }
        }
    }

    let sortedStr = '';
    for (let i = 0; i < chars.length; i++) {
        sortedStr += chars[i];
    }

    return sortedStr;
}


let result = sortString("dcba");
console.log(result); 
