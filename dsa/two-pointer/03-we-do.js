/* 
Step 2: We Do Together

Example 2: Checking if a String is a Palindrome
💡 Problem: Given a string, determine if it reads the same forward and backward.

💡 Plan:
(1) Use two pointers, one at the start and one at the end.
(2) Compare characters while moving the pointers inward.

I'll guide you through this. Try to fill in the blanks. 
*/

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // What should be returned if it's not a palindrome?
        }
        left++;  // Move the left pointer
        right--; // Move the right pointer
    }
    return true; // What should be returned if it's a palindrome?
}

// Example Run
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// 👉 Your Turn: Fill in the blanks before running the code.