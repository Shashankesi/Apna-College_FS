// str.trim()
let str="    Shashank    ";
console.log(str.trim()); //-> Shashank
console.log(str); //->     Shashank    

// to rpint in upper case
let str1=str.toUpperCase();
console.log(str1);

// to print in lower case
let str2=str.toLowerCase();
console.log(str2);

// string method's with Argument's
let strNew="I Love Aash";
console.log(strNew.indexOf("I")) ;
console.log(strNew.indexOf("Aaash"));
console.log(strNew.indexOf("Hello"));


// methods chaining
let msg="           God has Better Plan    ";
let newMsg=msg.trim().toUpperCase();
console.log(newMsg);


//slice
let word="ILoveCoding";
console.log(word.slice(1,2)); //->L
console.log(word.slice(0,10)); //->ILoveCodin

// Replace the word

// using the word ILoveCoding
console.log(word.replace("Love","Do"));
console.log(word.replace("I","You"));


// repeat
let love="Blind";
console.log(love.repeat(3));
console.log(love.repeat(2));