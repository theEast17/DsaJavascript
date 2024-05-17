
function getSubsets(arr) {
    let subsets = [[]]; 
    
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let newSubsets = [];
        
        // Create new subsets by adding the current number to each existing subset
        for (let j = 0; j < subsets.length; j++) {
            let subset = subsets[j].slice(); // Make a copy of the current subset
            subset.push(currentNum); // Add the current number to the new subset
            newSubsets.push(subset); // Add the new subset to the list of new subsets
        }
        
        // Add all new subsets to the list of all subsets
        subsets = subsets.concat(newSubsets);
    }
    
    return subsets;
}

let input = [1, 2, 3];
let output = getSubsets(input);
console.log(output);
