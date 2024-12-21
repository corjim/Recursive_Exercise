/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base case: return 1 if array is empty
  if (nums.length === 0) return 1;

  // Recursive case: multipy first num by the rest.
  return nums[0] * product(nums.slice(1));

} console.log(product([2, 4, 6]))// 48

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  // Base Case: 
  if (idx === words.length) return longestSoFar;
  // Recursive base.
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */
function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */
function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  // Base case: if the range is invalid, the value is not present
  if (left > right) {
    return -1;
  }
  let
    // Find the middle index
    middle = Math.floor((right + left) / 2);
  // Check if the middle element is the value
  if (arr[middle] === val) {
    return middle;
  }
  // If the value is smaller, search the left half
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  // If the value is larger, search the right half
  return binarySearch(arr, val, middle + 1, right);
}
module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
