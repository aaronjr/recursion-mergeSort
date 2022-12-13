/* eslint-disable no-unused-expressions */
// looped fibonaci
function fibs(times) {
  let x = 0;
  const array = [0];
  while (x < times - 1) {
    x === 0 ? array.push(1) : array.push(array[array.length - 1] + array[array.length - 2]);
    x += 1;
  }
  return array;
}

console.log('Looped fibonaci: ', fibs(12));

// fibonaci with recusion
// template for first 2 numbers of fib
function fibsrec(n, a = [0, 1]) {
  // check if length is equal to or bigger than n, if yes return the template plus added numbers
  // else call the function return an array, retaining n and taking off from a.length
  return a.length >= n ? a : fibsrec(n, [...a, a[a.length - 2] + a[a.length - 1]]);
}

console.log('Fibonaci with recusion: ', fibsrec(4));

// function to merge back together lists
function merge(left, right) {
  // create empty array
  const ordered = [];

  // initilize to 0
  let leftC = 0;
  let rightC = 0;

  // add the smallest number to new array
  while (leftC < left.length && rightC < right.length) {
    if (left[leftC] < right[rightC]) {
      ordered.push(left[leftC]);
      leftC += 1;
    } else {
      ordered.push(right[rightC]);
      rightC += 1;
    }
  }
  // add left over elements to array
  while (leftC < left.length) {
    ordered.push(left[leftC]);
    leftC += 1;
  }
  // add left over elements to array
  while (rightC < right.length) {
    ordered.push(right[rightC]);
    rightC += 1;
  }
  // return this new array
  return ordered;
}

// function to seperate into smaller sections of a bigger array
// eventually returning itself if length of 1
function seperate(array) {
  if (array.length === 1) return array;

  // seperate array into two halfs
  const Half = Math.floor(array.length / 2);
  const left = array.slice(0, Half);
  const right = array.slice(Half, array.length);

  // pass left and right into merge
  return merge(seperate(left), seperate(right));
}

console.log('Merge sort: ', seperate([2, 10, 5, 50, 36, 35]));
