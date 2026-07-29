arr = ["apple", "banana", "cherry"];

console.log(arr);

console.log(arr.length);

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[0],arr[2]);

arr[1] = "blueberry";

console.log(arr);




arr.push("date");

console.log(arr);



console.log(arr.pop());
console.log(arr);

arr.unshift("apricot");

console.log(arr);

console.log(arr.shift());

console.log(arr);

console.log(arr.includes("Apricot"));

console.log(arr.indexOf("cherry"));













console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}   

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;    
}   




arr1=["grape", "kiwi", "mango"];
arr2=["orange", "papaya", "pear"];

let combinedArr = arr1.concat(arr2);

let modernCombinedArr = [...arr1, ...arr2];

console.log(combinedArr);
console.log(modernCombinedArr);




let slicedArr = arr1.slice(0, 1);
console.log(slicedArr);

let splicedArr = arr1.splice(1, 1, "pineapple");
console.log(splicedArr);
console.log(arr1);

let fruits = ["Apple", "Banana", "Orange"];

let str = fruits.join();

console.log(str);

let array2 = [4, 5, 6];
console.log(array2);
console.log(Array.isArray(array2));

let notArray = "Hello, World!";
console.log(notArray);
console.log(Array.isArray(notArray));


console.log(arr);
// reverse the array
let reversedArr = arr.reverse();
console.log(reversedArr);

// sort an arrey of names alphabetically
let names = ["John", "Alice", "Bob", "Eve"];
console.log(names);
names.sort();
console.log(names);

let numbersarr = [5, 2, 9, 1, 5, 6];
console.log(numbersarr);
numbersarr.sort((a, b) => a - b);
console.log(numbersarr);



let looparr = [1, 37, 94,74, 12,3, 45,6, 78,9, 10,1,11,2];
for (let i = 0; i < looparr.length; i++) {
    let number = looparr[i];
    if (number > 10) {
        console.log(number);
    }
}

let sumarr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < sumarr.length; i++) {
    sum += sumarr[i];
}   
console.log(sum);




let removeDuplicates = [1, 2, 3, 4, 2, 5, 1, 3, 4, 6];

console.log(removeDuplicates);

let uniqueArr = [...new Set(removeDuplicates)];

console.log(uniqueArr);




// Given an array of mixed values (numbers and strings), separate them into two arrays and log both.

mixedArray = [1, "two", 3, "four", 5, "six"];

let numbersArray = [];
let stringsArray = [];

for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number") {
        numbersArray.push(mixedArray[i]);
    } else if (typeof mixedArray[i] === "string") {
        stringsArray.push(mixedArray[i]);
    }
}

console.log(numbersArray);
console.log(stringsArray);

console.log(mixedArray);







// Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).


jogaKhichuriArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,16,97,64,95,36,58, 74, 85, 92, 100];

largestValue = jogaKhichuriArray[0];

for (let i = 1; i < jogaKhichuriArray.length; i++) {
    if (jogaKhichuriArray[i] > largestValue) {
        largestValue = jogaKhichuriArray[i];
    }
}
console.log("Largest value:", largestValue);

smallestValue = jogaKhichuriArray[0];

for (let i = 1; i < jogaKhichuriArray.length; i++) {
    if (jogaKhichuriArray[i] < smallestValue) {
        smallestValue = jogaKhichuriArray[i];
    }
}
console.log("Smallest value:", smallestValue);




// Flatten a nested array (array containing arrays) into a single flat array.

let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flatArray = [];

for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
        flatArray.push(nestedArray[i][j]);
    }
}

console.log(flatArray);




// Rotate an array left by one position (first item moves to the end). Log the result.

let rotateArray = [1, 2, 3, 4, 5];
let firstItem = rotateArray.shift();
rotateArray.push(firstItem);
console.log(rotateArray);