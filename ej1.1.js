'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let minSum = 0, maxSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    minSum += arr[i];
    maxSum += arr[i + 1];
  }
  console.log(minSum, maxSum);
}
const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);

function main() {

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
