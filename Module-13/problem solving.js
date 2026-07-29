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





// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number
 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  // TODO: loop through the string and count vowels
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
 
console.log(countVowels("javascript")); // Expected: 3






// Input: a string
// Output: the string without its first and last character
// Returns: a string
 
function removeFirstAndLast(str) {
  // TODO: slice out the middle portion of the string
  return str.slice(1, -1);
}
 
console.log(removeFirstAndLast("hello")); // Expected: "ell"




// Input: a sentence (string)
// Output: the shortest word
// Returns: a string
 
function findShortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
  } 
  return shortest;
}
 
console.log(findShortestWord("JavaScript is a fun language")); // Expected: "a"













// Task 13-8B: Get a Value or a Default
// Problem Statement:
// Write a function getValueOrDefault that takes an object, a key name, and a default value, and returns the object's value for that key if it exists, otherwise the default value.
// Input
// Output
// person, key "age", default 0
// 25
// person, key "grade", default "N/A"
// "N/A"


// Starter Snippet:
// Input: an object, a key (string), a default value
// Output: the value at that key, or the default
// Returns: any value
 
function getValueOrDefault(obj, key, defaultValue) {
  // TODO: check if the key exists in the object
  if (key in obj) {
    return obj[key];
  } else {
    return defaultValue;
  }
}
 
let person = { name: "Sam", age: 25 };
console.log(getValueOrDefault(person, "age", 0));        // Expected: 25
console.log(getValueOrDefault(person, "grade", "N/A"));  // Expected: "N/A"








// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string
 
function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversedWords = words.reverse();
  return reversedWords.join(" ");   
 
}
 
console.log(reverseWords("hello world")); // Expected: "world hello"






// Input: an object (values are unique)
// Output: a new object with keys and values swapped
// Returns: an object
 
function invertObject(obj) {
  let inverted = {};
    for (let key in obj) {
      inverted[obj[key]] = key;
    }   
 
  return inverted;
}
 
console.log(invertObject({ a: 1, b: 2, c: 3 }));
// Expected: { 1: "a", 2: "b", 3: "c" }

