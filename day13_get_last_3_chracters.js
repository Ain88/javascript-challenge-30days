// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFunction(str) {
   var lastThree = str.substr(str.length - 3);
   
   return lastThree
}

function myFunction(str) {
   return str.slice(-3);
}
