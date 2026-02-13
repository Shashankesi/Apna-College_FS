// if-condition
let age = 20;
if(age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// if-else if-else condition

let month = "March";
if(month === "December" || month === "January" || month === "February") {
    console.log("It's winter.");
} else if(month === "March" || month === "April" || month === "May") {
    console.log("It's spring.");
} else if(month === "June" || month === "July" || month === "August") {
    console.log("It's summer.");
} else if(month === "September" || month === "October" || month === "November") {
    console.log("It's autumn.");
} else {
    console.log("Invalid month.");
}

// marks
let marks = 85;
if(marks >= 90) {
    console.log("Grade: A");
} else if(marks >= 80) {
    console.log("Grade: B");
} else if(marks >= 70) {   
    console.log("Grade: C");
} else if(marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}