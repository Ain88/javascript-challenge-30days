/**
https://leetcode.com/problems/roman-to-integer
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
  var myMap = new Map();
  myMap.set("I", 1);
  myMap.set("V", 5);
  myMap.set("X", 10);
  myMap.set("L", 50);
  myMap.set("C", 100);
  myMap.set("D", 500);
  myMap.set("M", 1000);
    const mm = s.split("");
    let result = 0;
    for(i=0; i<mm.length; i++){
        result += myMap.get(mm[i]);
    }
    return result;
};
