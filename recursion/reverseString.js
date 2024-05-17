

function reverseString(str) {
    if (str === '') {
        return ''
    } else return reverseString(str.substr(1)) + str.charAt(0)

}

console.log(reverseString('poorv'))


//  reverseString('poorv') - reverseString('oorv') + p
//  reverseString('oorv')  - reverseString('orv')  + o
//  reverseString('orv')   - reverseString('rv')   + o
//  reverseString('rv')    - reverseString('v')    + r
//  reverseString('v')     - reverseString('')     + v
//  reverseString('')      - '' 