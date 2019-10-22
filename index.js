"use strict";

// To complete this drill, you need to implement 2 functions, max and min. Both functions should take a single argument: an array of numbers called numbers. max(numbers) should return the largest number in the array, while min(numbers) should return the smallest.
//
// Assume that the numbers input only contains numbers (that is, you don't have to inspect your inputs to confirm they only contain numbers).
//
// If the numbers array is empty, then both max and min should return null or undefined, whichever is more convenient.
//
// Finally, note that you are not allowed to use JavaScript's sort method, which provides a simple-but-inefficient way to solve this problem (simply sort the array and return either the first or last element, depending on if you need min or max). Also, for obvious reasons, you are not allowed to use Math.max or Math.min.

const max = numbers => {
  if (numbers.length == 0) return;
  let i = 0;
  let currentLargest = numbers[i];
  while (i < numbers.length) {
    currentLargest = numbers[i] > currentLargest ? numbers[i] : currentLargest;
    i++;
  }

  return currentLargest;
};

const min = numbers => {
  if (numbers.length == 0) return;
  let i = 0;
  let currentSmallest = numbers[i];
  while (i < numbers.length) {
    currentSmallest =
      numbers[i] < currentSmallest ? numbers[i] : currentSmallest;
    i++;
  }

  return currentSmallest;
};

// Write a function called average that takes an array of numbers as its input and returns the average generated from the array of numbers.

// Recall that to compute the average of a set of numbers, you add together all of the numbers, and then divide the resulting value by the number of items in the array.

function average(numbers) {
  let sum = 0;

  numbers.forEach(number => (sum += number));

  return sum / numbers.length;
}

console.log(average([-12, 6, 9]));

// Create a function called repeat which takes two arguments:
// The first argument should be an arbitrary function, fn
// The second argument should be a number, n
// repeat should loop n times
// Each iteration of the loop, it should call fn
// Create two more functions called hello and goodbye:
// hello should log the string 'Hello world'
// goodbye should log the string 'Goodbye world'
// Use your repeat function to call the hello function five times: repeat(hello, 5)
// Use your repeat function to call the goodbye function five times: repeat(goodbye, 5)

const repeat = (fn, n) => {
  for (let i = 0; i < n; i++) fn.call();
};

const hello = () => console.log("hello world");
const goodbye = () => console.log("goodbye world");

repeat(hello, 5);
repeat(goodbye, 5);
