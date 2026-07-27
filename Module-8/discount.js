let cartTotal = 1500;
let isMember = true;

if (isMember && cartTotal >= 1000) {
    console.log("You get a 20% discount!");
}
else if (!isMember && cartTotal > 1000) {
    console.log("You  get a 10 % discount.");
}

else if (cartTotal < 1000) {
    console.log("No Discount Available");
}