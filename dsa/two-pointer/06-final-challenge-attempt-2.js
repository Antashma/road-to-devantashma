/* 
Final Challenge
Try solving this problem on your own using the two-pointer technique:

💡 Problem:
Given two sorted arrays, merge them into one sorted array without using extra space (modify in-place if possible).

Can you solve it efficiently with two pointers? 
*/

/* 
Plan
(1) sort the arrays in place using first
let arr1 = [1, 2] 
let arr2 = [3, 4] 
let pointer1 = 0
let pointer2 = 0


A if right value is greater or equal check if B is
>>>> less than: insert left of A
>>>> greater insert right of A and before

[1, 1, 7], 
 W
[0, 2, 3, 9]
 R

 */

function mergeSortedArrays(arr1, arr2) {
    let writeIndex = 0;
    let readIndex = 0;

    while(readIndex < arr2.length) {
        if (arr2[readIndex] >= arr1[writeIndex]) {
            ++writeIndex;
        } else {
            if (writeIndex === 0) { 
                 arr1.unshift(arr2[readIndex])
             } else {
                arr1.splice(writeIndex, 0, arr2[readIndex]);
            } 
            ++readIndex
        }
        
    }

    return arr1;
}

let arr1 = [0, 2, 2, 3];
let arr2 = [1, 4, 5];

mergeSortedArrays(arr1, arr2);

console.log(arr1); // Output: [0, 1, 2, 2, 3, 4, 5]



