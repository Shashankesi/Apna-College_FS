// performing mathematical operations using Math object
const num1=10;
const num2=3;
Math.max(num1,num2); // this will return the maximum of num1 and num2
Math.min(num1,num2); // this will return the minimum of num1 and num2
Math.sqrt(num1); // this will return the square root of num1
Math.pow(num1,num2); // this will return num1 raised to the power of num2
Math.abs(-5); // this will return the absolute value of -5
Math.round(4.7); // this will round 4.7 to the nearest integer, which is 5
Math.floor(4.7); // this will round 4.7 down to the nearest integer, which is 4
Math.ceil(4.7); // this will round 4.7 up to the nearest integer, which is 5
Math.random(); // this will return a random number between 0 and 1
Math.random()*100; // this will return a random number between 0 and 100
Math.floor(Math.random()*100); // this will return a random integer between 0 and 99    
Math.floor(Math.random()*100)+1; // this will return a random integer between 1 and 100
Math.PI; // this will return the value of PI
Math.E; // this will return the value of Euler's number


// performing operation on Random numbers
//step1: generate a random number between 0 and 1
let num=Math.random();
console.log(num); // this will print a random number between 0 and 1
//step2: multiply the random number by 10 to get a number between 0 and 10
num=num*10;
//step3: round the number to the nearest integer
num=Math.floor(num);
//step4: add 1 to the number to get a number between 1 and 10
num=num+1;
// now num will be a random integer between 1 and 10
console.log(num); // this will print a random integer between 1 and 10