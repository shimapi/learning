
//const arr = [1, 3, 5, 7, 9]
const arr = [7, 69, 2, 221, 8974]

/* function miniMaxSum(arr) {
  // Write your code here
  arr.sort();
  const arr1 = arr.slice(0, 4);
  const arr2 = arr.slice(1, 5);
  const min = arr1.reduce((ac, va) => ac + va, 0)
  const max = arr2.reduce((ac, va) => ac + va, 0)

  return (min + " " + max)
} */

function miniMaxSum(arr) {
  // Write your code here
  arr.sort();
  const min = arr.slice(0, 4).reduce((ac, va) => ac + va, 0)
  const max = arr.slice(1, 5).reduce((ac, va) => ac + va, 0)

  return (min + " " + max)
}
console.log(miniMaxSum(arr))