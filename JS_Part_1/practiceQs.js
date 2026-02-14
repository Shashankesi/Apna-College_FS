// create a sytem to calculate popcorn price based on the size customer asked for:-
// if size is "XL" then price is 250
// if size is "L" then price is 200
// if size is "M" then price is 150
// if size is "S" then price is 100

let size = "XL";
let price;
console.log(`Calculating price for ${size} popcorn...`);
if(size=="XL"){
    price = 250;
    console.log(`The price of ${size} popcorn is ${price}`);
} else if(size=="L"){
    price = 200;
    console.log(`The price of ${size} popcorn is ${price}`);
} else if(size=="M"){
    price = 150;
    console.log(`The price of ${size} popcorn is ${price}`);
} else if(size=="S"){
    price = 100;
    console.log(`The price of ${size} popcorn is ${price}`);
} else {
    console.log("Invalid size");
}
    // A good string is a string that start with the letter 'a' & has the length >3 
    // write a program to find a string is good or not
//     let str = "aash";

//     if (str[0] === 'a' && str.length > 3) {
//         console.log("The string is good.");
//     } else {
//         console.log("The string is not good.");
//     }
//     // one more way to do with the use of startwith
//     let str1 = "aash";

// if (str1.startsWith('a') && str1.length > 3) {
//     console.log("The string is good.");
// } else {
//     console.log("The string is not good.");
// }


// to check and predict the output

// let num=12;
// if((num%3===0) && ( (num+1==15) || (num-1==11))){
//     console.log("Safe");
// }else{
//     console.log("unSafe");
// }