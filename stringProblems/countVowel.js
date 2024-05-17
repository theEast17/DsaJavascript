const countVowel = (str) => {
    // 1st
    const cleanStr = str.replace(/\W/g, '')
    const string = cleanStr.match(/[aeiouAEIOU]/g)
    console.log(string.length)

    // 2nd

    // const arrayOfVowels=['a','e','i','o','u','A','E','I','O','U']

    // let count=0

    // for(let char of arrayOfVowels){
    //     if(str.includes(char)){
    //         count=count+1
    //     }
    // }
    // return count
}

console.log(countVowel('i am POorv nagar'))