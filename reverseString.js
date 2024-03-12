// exmaples reverse('hi') === 'ih'
// reverse ('hello')  === 'olleh'
// reverse ('east')  === 'tsae'



// function reverse(str){
//     return str.split('').reverse().join('')
// }

function reverse(str) {
    let string = ''
    // for (let i = 0; i < str.length; i++) {
    //     string = string + str[(str.length - i) - 1]
    // }
    for (let char of str) {
        string =  char + string
    }
    return string
}

console.log(reverse('hello'))