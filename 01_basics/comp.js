console.log(null>0); // false
console.log(null==0); // false
console.log(null>=0); // true

// equality and comparison check works differeently in jaavscript 
// comparison converts the null to a number and hence >= gets true and in equality its not converted 

console.log("2" == 2); //true
console.log("2"===2); // false