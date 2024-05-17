


function isValidParenthesis(str) {

    let arr = []
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (char === '{' || char === '(' || char === '[' || char === '>') {
            arr.push(char)
        } else if (char === '}' || char === ')' || char === ']' || char === '<') {
            if (arr.length === 0) {
                return false
            }
            let top = arr.pop()
            if ((top === '{' && char !== '}') ||
                (top === '[' && char !== ']') ||
                (top === '<' && char !== '>') ||
                (top === '(' && char !== ')')
            ){
                return false
            }
        }
    }
    return arr.length == false

}

console.log(isValidParenthesis('(<)>')); 



