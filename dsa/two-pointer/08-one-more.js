/* 
🚀 Challenge: Find Pair with Target Sum
You are given a sorted array of integers nums and a target sum.
Your task is to find two numbers in the array that add up to the target.

You should return the indices of the two numbers (1-based index, not 0-based).
If no pair is found, return [-1, -1].

💡 Constraints:
- The input array is sorted in ascending order.
- Each input has exactly one solution.
- The array may contain both positive and negative numbers.

Example 1:
Input: nums = [1, 2, 3, 6, 8, 11, 15], target = 9  
Output: [3, 4]  
Explanation: `nums[3] + nums[4]` → `3 + 6 = 9`

Example 2:
Input: nums = [-3, -1, 2, 4, 7, 10], target = 6  
Output: [2, 5]  
Explanation: `nums[2] + nums[5]` → `-1 + 7 = 6`

Example 3:
Input: nums = [1, 3, 5, 7], target = 100  
Output: [-1, -1]  
Explanation: No two numbers add up to 100.


NOTES:
input:  nums = [1, 3, 5, 7], target = 100
output: [-1, -1]

L = 0
R = middle of arr = math.ceil(arr.length/2)

currSum = nums[l] + nums[r] >>>> 

target = 100
compliment = target - highest num >>>> 93 
would not be in this arr so return [1, -1] otherwise the algo
[1, 3, 5, 7]
 L
          R    

 if sum is less then target move left++ else move right--
 return indices [l + 1, r + 1] once sum is found
 otherwise return [-1, -1]
*/

function findPairWithSum(nums, target) {

  let left = 0, right = nums.length - 1;
  
  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) return [left + 1, right + 1];

    if (sum < target) left++;
    else right--;
  }

  return [-1, -1]
}

const example1 = findPairWithSum([1, 2, 3, 6, 8, 11, 15], 9) //output [3, 4]
const example2 = findPairWithSum([-3, -1, 2, 4, 7, 10], 6) //output [2, 5]
const example3 = findPairWithSum([1, 3, 5, 7], 100) //output: [-1, -1]

console.log({example1, example2, example3})