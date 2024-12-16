'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

// let inputString = [ '6', '1 2 3 4 10 11' ]; // Ejecutar con node app.js
let inputString = "";
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    console.log('Contenido de inputString:', inputString);
    main();
});

function readLine() {
    return inputString[currentLine++] || "";
}


/* 
Complete the 'simpleArraySum' function below.
The function is expected to return an INTEGER.
*/

function simpleArraySum(ar) {
    // Write your code here
    return ar.reduce((acc, num) => acc + num, 0); // Esta es la repuesta.
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH || './output.txt');

    const arCount = parseInt(readLine().trim(), 10);
    console.log('arCount:', arCount); // Depuración

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));
    console.log('ar:', ar); // Depuración

    const result = simpleArraySum(ar);
    console.log('Resultado:', result); // Depuración

    ws.write(result + '\n');
    ws.end();
}

// main(); // Ejecutar con node app.js