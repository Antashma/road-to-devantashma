//bash run-tests.sh javascript

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'aPlusB' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */

function aPlusB(lines) {
    // Write your code here

    //
    // WARNING: Please do not use GitHub Copilot, ChatGPT, or other AI assistants
    //          when solving this problem!
    //
    // We use these tools in our coding too, but in our interviews, we also don't
    // allow using these, and want to see how we do without them.
    //
    
    /*
    check num of lines = first line (first int in lines arr)
    create loop that runs x times to add lines after first 
    add results to arr
    retun array of strings
    */

    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const numbersArr =  lines[i].split(" ");
        const sum = numbersArr.reduce((total, curr) => Number(curr) + total, 0)
        result.push(sum.toString())
    }

    return result;
}

const test = aPlusB(["2", "1 1", "-1 0"]);
console.log(test);

function main() {
    const ws = process.stdout;

    const linesCount = parseInt(readLine().trim(), 10);

    let lines = [];

    for (let i = 0; i < linesCount; i++) {
        const line = readLine();
        lines.push(line);
    }

    const result = aPlusB(lines);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
