let currentMonthNumber = new Date().getMonth() + 1; // Get the current month number (1-12)

let season; 

if (currentMonthNumber >= 3 && currentMonthNumber <= 5) {
    season = "Spring";
}

else if (currentMonthNumber >= 6 && currentMonthNumber <= 8) {
    season = "Summer";
}   

else if (currentMonthNumber >= 9 && currentMonthNumber <= 11) {
    season = "Autumn";
}

else {
    season = "Winter";
}

console.log("The current season is:", season);
