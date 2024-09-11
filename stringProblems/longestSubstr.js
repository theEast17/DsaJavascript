

function longestSubstrwithoutrepeat(str) {
    // let result = ''
    // for (let i = 0; i < str.length; i++) {
    //     let ans = ''
    //     let total = 0
    //     while (!ans.includes(str[i + total]) && (i + total) < str.length) {
    //         ans = ans + str[i + total]
    //         total++
    //     }
    //     if (ans.length >= result.length) {
    //         result = ans
    //     }
    // }
    // console.log(result.length)
    let s=new Set()
    s.add(1)
    s.add(2)
    s.add(3)
    console.log(s)

}

longestSubstrwithoutrepeat('abcdefsaertabcd')
// longestSubstrwithoutrepeat('abcabcbb')
// longestSubstrwithoutrepeat('bbbbb')
// longestSubstrwithoutrepeat('pwwkew')
// longestSubstrwithoutrepeat('abcdeffgh')
// longestSubstrwithoutrepeat('dvdf')
// longestSubstrwithoutrepeat('aab')
// longestSubstrwithoutrepeat('tmmzuxt')



// let result = '';
// for (let i = 0; i < str.length; i++) {
//     let total = 0;
// 1st approach
//     while (total < 3 && (i + total) < str.length) {
//         result += str[i + total];
//         total++;
//     }
//     // result += str.slice(i, i + 3);   //2nd approach
// }
// console.log(result);  //abcbcacababcbcc