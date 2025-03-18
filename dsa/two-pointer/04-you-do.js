/* 
Step 3: You Try

Example 3: Removing Duplicates from a Sorted Array (In-Place)
💡 Problem: Given a sorted array, remove duplicates in-place so that each unique element appears only once. Modify the array without using extra space and return the updated length.

💡 Plan:
(1) Use one pointer to track unique values (writeIndex).
(2) Use another pointer to iterate through the array (readIndex).
(3) Overwrite duplicates in place.

💡 Try implementing this yourself! 
*/

function removeDuplicates(arr) {
    // let writeIndex = 1;
    // let readIndex = 0;

    // while(readIndex < arr.length) {
    //     if (arr[writeIndex] === arr[readIndex]) {
    //         arr.splice(writeIndex, 1);
    //     }
    //     writeIndex++;
    //     readIndex++;
    // }
    // return arr.length;

    /* ISSUES 👆
    - writeIndex should track where the next unique element should be placed.
    - readIndex should traverse the array to find new unique elements.
    */
    let writeIndex = 1;

    for (let readIndex = 1; readIndex < arr.length; readIndex++) {
        console.log({arr, readIndex, writeIndex})
        if (arr[writeIndex - 1] !== arr[readIndex]) {
           arr[writeIndex] = arr[readIndex];
            writeIndex++
        }        
    }
    return writeIndex;
}

// Example Run
let nums = [1, 1, 2, 2, 3, 4, 4, 5];
let length = removeDuplicates(nums);
console.log("result: ", nums.slice(0, length)); // Output: [1, 2, 3, 4, 5]
//removeDuplicates(nums);