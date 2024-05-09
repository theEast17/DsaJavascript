//  given an integer array nums , find the subarray with the largest sum, and return its sum
// input [-2,1,-3,4,-1,2,1,-5,4] -> output=6  [4,-1,2,1]
// input [5,4,-1,7,8]   -> output=23  [5,4,-1,7,8]

function maxSubArray(nums) {
    let maxSum = nums[0]  //1 4
    for (let i = 0; i < nums.length; i++) {
        let currentValue = 0  //1 -2 2
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j] + currentValue) > maxSum) {
                maxSum = nums[i] + nums[j]
            }
            currentValue = nums[j] + currentValue
        }
    }
    return maxSum

   


}


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))