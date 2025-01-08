export { addDays }

// Function to Add days to current date
function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}

// Get the current date
const todayDate = new Date();

// Number of days that we want to add to the current date
const days = 7;

// Function call to add days
const newDate = addDays(todayDate, days);

console.log("New Date: ", newDate.toDateString());