/* 
Final Challenge
Try solving this problem on your own using the two-pointer technique:

💡 Problem:
Given two sorted arrays, merge them into one sorted array without using extra space (modify in-place if possible).

Can you solve it efficiently with two pointers? 
*/

/* 
Plan
(1) combine the arrays
[1, 2] [3, 4] ==> [1, 2, 3, 4]

(2) left and right pointers will check sorted. left must be less than right
[1, 2, 3, 4]
          R
 W

 output = [1, 2, 3, 4]

 ----

 example 2:

 [1, 2, 4] [3, 5] ==> [1, 2, 4, 3, 5]
if 1 before the last index (end loop)
 [1, 2, 3, 4, 5]
           R
        W

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
combined = [1, 3, 5, 7, 2, 4, 6, 8]
use while loop while (R < combined.length - 1)
if r is at index 0 increase to 1
R pointer checks left value is less and right value is more
if true R moves to next index
if false
    left value is more or right value is less
    W moves to R index
    swap left and R values
    R-- and resumes check
when R gets to last index, return the new array



[4, 6, 7, 5, 8, 9]
       R
          W

*/

function mergeAndSort(arr1, arr2) {
    let combined = [...arr1, ...arr2]    
    let readIndex = 1;
    let writeIndex = 1;

    while (readIndex < combined.length - 1) {
        let leftValue = combined[readIndex - 1];
        let rightValue = combined[readIndex + 1];

        if (readIndex === 0) {
            readIndex = 1; 
        } 
        
        if (leftValue > combined[readIndex]) {
            writeIndex = readIndex - 1;
            combined[writeIndex] = combined[readIndex];
            combined[readIndex] = leftValue;
            readIndex--;

        } else if (rightValue < combined[readIndex]) {
            writeIndex = readIndex + 1;
            combined[writeIndex] = combined[readIndex];
            combined[readIndex] = rightValue;
            readIndex--;

        } else {
            readIndex++;
        }
    }

    return combined;
}

let arr1 = [1, 2, 3];
let arr2 = [];
const result = mergeAndSort(arr1, arr2)
console.log(result)

//not a true two-pointer solution :(