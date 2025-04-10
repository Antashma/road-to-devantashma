/* 
🚀 Challenge: Given a NxN matrix, rotate it 90 degrees clockwise in place.

Example:
input: 
[
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9],
]

output:
[
 [7, 4, 1],
 [8, 5, 2],
 [9, 6, 3],
]

*/


function rotateMatrix(matrix) {
    let n = matrix.length;

    //swap across diagonally
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            //swap elements matrix[i][j] and matrix[j][i]
            [matrix[i][j], matrix[j][i]] =  [matrix[j][i], matrix[i][j]]
        }
    }

    for (let row of matrix) {
        row.reverse();
    }

    return matrix;
}

//TEST
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
   ]

const result = rotateMatrix(matrix);
console.log(result);