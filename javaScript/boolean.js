// boolean represents a logical entity that can have two values: true or false

let age=23;
let isAdult= age>=18; // condition evaluates to true
console.log("Is adult: " + isAdult); // Output: Is adult: true

let isMinor= age<18; // condition evaluates to false
console.log("Is minor: " + isMinor); // Output: Is minor: false

let a=5;
console.log("Type of a before reassignment: " + typeof a); // Output: Type of a before reassignment: number 

a=true; // reassigning boolean value to variable 'a'
typeof a; // 'a' is now of type boolean
console.log("Type of a after reassignment: " + typeof a); // Output: Type of a after reassignment: boolean