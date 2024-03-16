// exmaples reverse('hi') === 'ih'
// reverse ('hello')  === 'olleh'
// reverse ('east')  === 'tsae'


// 1st
// function reverse(str){
//     return str.split('').reverse().join('')
// }

function reverse(str) {
    let string = '';
    // 2nd
    // for (let i = 0; i < str.length; i++) {
    //     string = string + str[(str.length - i) - 1]
    // }

    // 3rd
    for (let char of str) {
        string =  char + string
    }
    return string
}

console.log(reverse('hello'))