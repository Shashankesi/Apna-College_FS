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

    // nested if-else condition
    // let marks1=45;
    // we are using above declared marks->85 
    if(marks>=80){
        console.log("You are eligible for scholarship.");
        if(marks>=90){
            console.log("You will get 100% scholarship.");
        } else if(marks>=80){
            console.log("You will get 50% scholarship.");
        } 
    }else if(marks>=40){
        console.log("You are eligible for re-exam.");
    }else{
        console.log("You have failed.");
    }

    // switch case
    let date="14th February";
    switch(date){
        case "14th February":
            console.log("It's Valentine's Day for lovers. And it's also black day pulvama attack remembrance day for us.");
            break;
        case "15th August":
            console.log("It's Independence Day for us.");
            break;
        case "2nd October":
            console.log("It's Gandhi Jayanti for us.");
            break;
        default:
            console.log("It's just a normal day.");
    }