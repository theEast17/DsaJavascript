const titleCase = (str) => {
      let arrayOfWords = str.split(' ')
    // 1st
    const capitalizedArray=[]
  
    for(let i=0;i<arrayOfWords.length;i++){
       capitalizedArray.push(arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1))
    }
    return capitalizedArray.join(' ')

    // 2nd
    // return arrayOfWords.map((arr) => arr[0].toUpperCase() + arr.slice(1)).join(' ')

}

console.log(titleCase('this is Poorv nagar from ahmedbad'))

