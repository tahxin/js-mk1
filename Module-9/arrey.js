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