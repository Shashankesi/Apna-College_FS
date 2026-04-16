let num= Math.random(); // this will generate a random number between 0 and 1
console.log(num); 
num=num*10;
console.log(num); 
num=Math.floor(num); // this will round the number down to the nearest integer
console.log(num);
num=num+1; // this will add 1 to the number to get a number between 1 and 10
console.log(num); // this will print a random integer between 1 and 10

// or make it to signle line
let random=Math.floor(Math.random()*10)+1; 
console.log(random); // this will print a random integer between 1 and 10