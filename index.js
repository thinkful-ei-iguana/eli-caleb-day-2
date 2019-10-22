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
