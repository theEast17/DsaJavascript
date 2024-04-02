const twoSum = (arr, target) => {
    // 1st  Brute force Technique
    // let ans=[]
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if(arr[i]+arr[j]===target){
    //             ans.push(i,j)
    //         }else{
    //             continue;
    //         }
    //     }
    // }
    // return `[${ans[0]},${ans[1]}]`

    // 2nd
    // let found=false
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if(arr[i]+arr[j]===target){
    //             found=true;
    //             return [i,j]
    //         }
    //     }
    // }
    // if(!found){
    //     return false
    // }

    // 3rd
        const obj = {};
        for (let i = 0; i < arr.length; i++) {
            const complement = target - arr[i];
            if (obj.hasOwnProperty(complement)) {
                return [obj[complement], i];
            }
            obj[arr[i]] = i;
        }
        
        return "No pair found";    

}

// 1 :0
// 2: 1
// 3: 2
// 4: 3
// 5: 4



console.log(twoSum([1, 2, 3, 4, 5, 3], 9))