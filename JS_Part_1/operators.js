//arithmetic operators
let a=5;
let b=2;
console.log("a + b is " + (a+b));
console.log("a - b is " + (a-b));
console.log("a * b is " + (a*b));
console.log("a / b is " + (a/b));
console.log("a % b is " + (a%b));

// unary operators
let c=10;
console.log("Value of c is " + c);
console.log("Value of c after increment is " + ++c);
console.log("Value of c after decrement is " + --c);

// assignment operators
let d=5;
console.log("Value of d is " + d);
d += 3;
console.log("Value of d after addition assignment is " + d);
d -= 2;
console.log("Value of d after subtraction assignment is " + d);
d *= 4;
console.log("Value of d after multiplication assignment is " + d);
d /= 2;
console.log("Value of d after division assignment is " + d);
d %= 3;
console.log("Value of d after modulus assignment is " + d);

// comparison operators
let e=10;
let f=20;
console.log("Is e equal to f? " + (e == f));    
console.log("Is e not equal to f? " + (e != f));

// logical operators
let g=true;
let h=false;
console.log("g AND h is " + (g && h));
console.log("g OR h is " + (g || h));
console.log("NOT g is " + (!g));