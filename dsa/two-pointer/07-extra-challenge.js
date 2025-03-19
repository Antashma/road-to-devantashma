/* 
🚀 Final Challenge: Move Zeros to the End

Problem Statement:
Given an array of numbers, move all zeros to the end while maintaining the relative order of the non-zero elements. Do this in-place using the two-pointer technique and without using extra space.


EXAMPLE #1
let nums = [0, 1, 0, 3, 12];
moveZeros(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]

EXAMPLE #2
let nums = [0, 0, 1, 2, 3];
moveZeros(nums);
console.log(nums); // Output: [1, 2, 3, 0, 0]

EXAMPLE #3
let nums = [4, 5, 6];
moveZeros(nums);
console.log(nums); // Output: [4, 5, 6] (No change)

EXAMPLE #4
let nums = [0, 0, 0, 0];
moveZeros(nums);
console.log(nums); // Output: [0, 0, 0, 0] (No change)


🚦 Requirements for Your Solution:
✅ Must use the two-pointer technique
✅ Must be in-place (modify the array directly, no extra arrays allowed)
✅ Must maintain relative order of non-zero elements
✅ Aim for O(n) time complexity


NOTES
input: [0, 1, 0, 3, 12]
output: [1, 3, 12, 0, 0]
nonzero = 1

[1, 3, 12, 0, 0];
             I  
       J

i finds zeros
j will be at first zero index
>>> if i finds a non zero && j is at a zero-value index
>> arr[j] will be the non zero
>> arr[i] will become 0
j++



*/

function moveZeros(arr) {
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++
        }
    }
    return arr;
}

let nums =  [0, 1, 0, 3, 12];
moveZeros(nums);
console.log(nums);

