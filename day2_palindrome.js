/**
https://leetcode.com/problems/palindrome-number
 * @param {number} x
 * @return {boolean}
 
Notice the == as opposed to === because we want to check if both sides are equal regardless of their type. In this case, X is a number while the computed value is a string.

Some of the methods chained are

toString() to convert the number to a string
split() to convert the string to an array of characters
reverse() to reverse the array
join() to join the array back to a string
 */

var isPalindrome = function(x) {
  return x == x.toString().split('').reverse().join('');
};
