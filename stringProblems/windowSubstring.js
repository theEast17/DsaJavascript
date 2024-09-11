function minimumWindowSubstring(str, target) {

    let string = ''
    let result = ''

    for (let i = 0; i < str.length; i++) {
        let arr = Array.from(target)
        let count = 0
        string = ''
        while (i + count < str.length) {
            if (arr.includes(str[i + count])) {
                string += str[i + count]
                let findIndex = arr.indexOf(str[i + count])
                arr.splice(findIndex, 1)
            } else {
                string += str[i + count]
            }
            count++
        }
        if (arr.length === 0) {
            if (result === '' || string.length < result.length) {
                result = string
            }
        }

    }
    console.log(result)
}
minimumWindowSubstring('hbpobh', 'hbo')

