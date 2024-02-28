
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
    console.log(parseInt(hour) + 12 + minsec)
  } else {
    console.log(time)
  }
}
timeConversion(s);