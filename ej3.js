'use strict';

const { time } = require('console');
const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
const s = '07:05:45PM';

function timeConversion(s) {
  // Write your code here
  const time = s.slice(0, 8);
  const ampm = s.slice(8, 10);
  const hour = s.slice(0, 2);
  const minsec = s.slice(2, 8);
  if (ampm === 'PM') {
    return parseInt(hour) + 12 + minsec
  } else {
    return time
  }
}
timeConversion(s);

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
