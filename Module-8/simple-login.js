// Has some issues with the code logic and conditions. The order of the conditions and the checks for username and password are not structured properly, which may lead to unexpected behavior.
// unused variables: adminUsername, adminPassword
// otherwise working fine and solid code


let username = "nishat";
let adminUsername = "admin";
let password = "password123";
let adminPassword = "adminpass";
let isAdmin = true;
let isLoggedIn = true;

if (isLoggedIn && isAdmin) {
    console.log("Welcome, Admin!");
}

else if (isLoggedIn && !isAdmin) {  
    console.log("Welcome, User!");
}   

else if (!isLoggedIn) {
    console.log("Please log in.");
}   

else if (username === "admin" && password === "password123") {
    console.log("Admin login successful.");
}

else if (username !== "admin" || password !== "password123") {
    console.log("Invalid credentials.");
}

else if (username === "admin" && password !== "password123") {
    console.log("Incorrect password for admin.");
}

else if (username !== "admin" && password === "password123") {
    console.log("Incorrect username.");
}

else if (username !== "admin" && password !== "password123") {
    console.log("Invalid username and password.");
}

else if (username === "admin" && password === "password123" && isAdmin) {
    console.log("Admin login successful.");
}

else if (username === "admin" && password === "password123" && !isAdmin) {
    console.log("User login successful.");
}   