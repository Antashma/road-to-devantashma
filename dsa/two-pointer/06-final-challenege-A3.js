/*
use push for the solution


MERGED
[1, 2, 2, 3, 4 ]

ARRAY 1
[1, 2, 4]
       I

ARRAY 2
[2, 3, 5, 6]
          J
 */

function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const merged = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}


const arr1 = [1, 2, 4];
const arr2 = [2, 3, 5, 6];

const result = mergeSortedArrays(arr1, arr2); //output = [1, 2, 2, 3, 4, 5, 6]
console.log(result);