/* 
Step 1: You Watch (I Do)

Example 1: Finding a Pair That Sums to a Target
💡 Problem: Given a sorted array and a target sum, find two numbers that add up to the target. 
*/

function findPair(arr, target) {
    let left = 0;            // First pointer at the start
    let right = arr.length - 1;  // Second pointer at the end

    while (left < right) { // Move pointers towards each other
        let sum = arr[left] + arr[right];
        
        if (sum === target) {
            return [arr[left], arr[right]]; // Found the pair
        } else if (sum < target) {
            left++;  // Move left pointer right to increase sum
        } else {
            right--; // Move right pointer left to decrease sum
        }
    }
    return []; // No pair found
}

// Example Run
console.log(findPair([1, 2, 3, 4, 6, 8], 10)); // Output: [2, 8]


/* 
Explanation
(1) Start with left pointer at the beginning and right pointer at the end.
(2) If their sum is less than the target, move left forward.
(3) If their sum is more than the target, move right backward.
(4) Repeat until they meet or find a pair.

Time Complexity: O(n)
(One pass through the array, no nested loops.) 
*/