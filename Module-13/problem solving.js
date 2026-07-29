// Example format to follow for every task:
// Input: a number
// Output: "Positive", "Negative", or "Zero"
// Returns: a string






// Input: a number
// Output: "Hot", "Cold", or "Normal"
// Returns: a string
 
function checkTemperature(temp) {
    if (temp > 30) {
        return "Hot";
    } else if (temp <= 15) {
        return "Cold";
    } else {
        return "Normal";
    }
}
 
console.log(checkTemperature(35)); // Expected: "Hot"
console.log(checkTemperature(10)); // Expected: "Cold"
console.log(checkTemperature(20)); // Expected: "Normal"





// Input: a number
// Output: the number with digits reversed
// Returns: a number
 
function reverseNumber(num) {
  let str = num.toString();
  let reversedStr = str.split("").reverse().join("");
  return parseInt(reversedStr);
 
}
 
console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7));    // Expected: 7







// Input: a number
// Output: product of its digits
// Returns: a number
 
function productOfDigits(num) {
  let str = num.toString();
  let total = 1;
  for (let i = 0; i < str.length; i++) {
    total *= parseInt(str[i]);
  }
  return total;
}
 
console.log(productOfDigits(123));  // Expected: 6
console.log(productOfDigits(4040)); // Expected: 0
    






// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array
 
function getOddNumbers(n) {
  let odds = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  return odds;
}
 
console.log(getOddNumbers(10));
// Expected: [1, 3, 5, 7, 9]
