// Write a function called getFirstLetterUppercase that takes an array of strings and returns a new array where each string starts with an uppercase letter.
//  Constraints:
// Do not use .map(), .toUpperCase(), or any string methods like .charAt().
// You must loop through the strings and manually convert lowercase to uppercase by using character codes.
//  Example:
// getFirstLetterUppercase(["apple", "banana", "cat"]);
// // returns ["Apple", "Banana", "Cat"]
// getFirstLetterUppercase(["dog", "egg", "fish"]);
// // returns ["Dog", "Egg", "Fish"]

const a = ["apple", "banana", "cat"];   // Sample array a
const b = ["dog", "egg", "fish"];       // Sample array b

/*  
PLAN 

loop through each word
get 0 index 
get char code at index
-n to gert uppcase
add captialized word to new arr
return new arr
*/


function getFirstLetterUppercase(wordArr) {
    const result = [];
    for (let word of wordArr) {
        
        const split = word.split("")
        console.log(split)
        const firstCharCode = word.charCodeAt(0);
        const newCharCode = String.fromCharCode(firstCharCode - 32);
        split[0] = newCharCode;
        result.push(split.join(""))
    }

    return result;
}

getFirstLetterUppercase(a);



function getFirstLetterUppercase(arr) {
  let newArr = new Array(arr.length);   // Create a new array with the same length as input

  for (let i = 0; i < arr.length; i++) {  // Loop through each element in the input array
    let str = arr[i];                    // Get the current string
    let newStr = "";                     // Initialize a new empty string for the capitalized word

    let firstCharCode = str[0].charCodeAt(0);         // Get ASCII code of the first character
    let upperChar = String.fromCharCode(firstCharCode - 32); // Convert to uppercase (ASCII trick)
    newStr += upperChar;                 // Add the capitalized first letter to newStr

    for (let j = 1; j < str.length; j++) {  // Loop through the rest of the characters
      newStr += str[j];                     // Add them to newStr unchanged
    }

    newArr[i] = newStr;                  // Store the completed word in the new array
  }

  return newArr;                         // Return the array with capitalized words
}

console.log("David", getFirstLetterUppercase(a)); // Output: [ 'Apple', 'Banana', 'Cat' ]
console.log("DAvid", getFirstLetterUppercase(b)); // Output: [ 'Dog', 'Egg', 'Fish' ]