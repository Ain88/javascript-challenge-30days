/**
https://leetcode.com/problems/palindrome-number
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var j = x.length-1
    for(i=0; i<x.length/2; i++){
        j = j-1;
        if(x[i]!=x[j]){
            return false;
        }else if(i == j){
            return true;
        }
    }
    return true;
};
