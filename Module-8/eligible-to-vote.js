let age = 20;
let hasId = true;

if (age >= 18 && hasId) {
    console.log("Eligible to vote");
}
else if (age < 18) {
    console.log("Not eligible to vote");
}

else if (!hasId) {
    console.log("Not eligible to vote");
}

else if (age < 18 && !hasId) {
    console.log("Not eligible to vote");
}   

