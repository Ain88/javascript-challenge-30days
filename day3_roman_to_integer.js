/**
https://leetcode.com/problems/roman-to-integer
 * @param {string} s
 * @return {number}
 */
 let decimals = {
    'I'  : 1,
    'IV' : 4,
    'IX' : 9,
    'V'  : 5,
    'X'  : 10,
    'XL' : 40,
    'XC' : 90,
    'L'  : 50,
    'C'  : 100,
    'CD' : 400,
    'CM' : 900,
    'D'  : 500,
    'M'  : 1000,
 }
var romanToInt = function(s) {
    let dec = 0;
    for(let i = 0 ; i < s.length ; i++){
		// if the next char is sequence of the special combination, then use  those to find in the dictionary the value
        if(
            s.charAt(i) == 'I' && (s.charAt(i+1) == 'X' || s.charAt(i+1) == 'V')
            || 
            s.charAt(i) == 'X' && (s.charAt(i+1) == 'L' || s.charAt(i+1) == 'C')
            || 
            s.charAt(i) == 'C' && (s.charAt(i+1) == 'D' || s.charAt(i+1) == 'M')
        ){
            dec += decimals[s.charAt(i) + s.charAt(i+1)]
            i++;
        }else{
            dec += decimals[s.charAt(i)]
        }
    }
    retu
