//  given an integer numsay nums , find the subnumsay with the largest sum, and return its sum
// input [-2,1,-3,4,-1,2,1,-5,4] -> output=6  [4,-1,2,1]
// input [5,4,-1,7,8]   -> output=23  [5,4,-1,7,8]

function maxSubnumsay(nums) {


    // let maxSum = nums[0]  //-1
    // let start=0
    // let end=0

    // for (let i = 0; i < nums.length; i++) {
    //     let ans = 0
    //     for (let j = i; j < nums.length; j++) {
    //         ans = ans + nums[j]   //-1
    //         if (ans > maxSum) {
    //             maxSum = ans
    //             start=i
    //             end=j
    //         }
    //     }
    // }
    // return {

    //     sum:maxSum,
    //     subnumsay:nums.slice(start,end+1)

    // }
  


    // kadane's algorithm
    let sum = 0;
    let maxSum = nums[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum > maxSum) {
            maxSum = sum;
            start = tempStart;
            end = i;
        }

        if (sum < 0) {
            sum = 0;
            tempStart = i + 1;
        }
    }

    return {
        maxSum: maxSum,
        subarray: nums.slice(start, end + 1)
    };

}


console.log(maxSubnumsay([-2, 1, -3, 4, 1, 2, -1, 5, 4]))