/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

//const arr = [5, 3, 1, 2, 4]
const arr = [0, 1, 2, 4, 6, 5, 3];


function findMedian(arr) {
  // Write your code here
  arr.sort();
  const arrLength = arr.length;
  const arrMedian = Math.floor(arrLength / 2);
  console.log(arr[arrMedian])

}
findMedian(arr)