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
    let str = "aash";

    if (str[0] === 'a' && str.length > 3) {
        console.log("The string is good.");
    } else {
        console.log("The string is not good.");
    }
    // one more way to do with the use of startwith
    let str1 = "aash";

if (str1.startsWith('a') && str1.length > 3) {
    console.log("The string is good.");
} else {
    console.log("The string is not good.");
}


// to check and predict the output

let num=12;
if((num%3===0) && ( (num+1==15) || (num-1==11))){
    console.log("Safe");
}else{
    console.log("unSafe");
}

// use switch case statement to find the day of the week based on the number given by user
let dayNum = 3;
switch(dayNum){
    case 1:
    console.log("Today is Monday");
    break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is satuarday");
        break;
    case 7:
        console.log("Today is holiday");
        break;
    default:
        console.log("Enter correct date between 1-7");
}

//create a number variable num with some value 
// now print "good"if the number is divisible by 10 and "bad" if not

let newNum=20;
if(newNum % 10 ==0){
    console.log("it's a good number")
}else{
    console.log("It's bad number");
}

// write a program to find the gratest in the given 3 number
let n1=23;
let n2=21;
let n3=25;
    if(n1>n2 && n1>n3){
        console.log(`The greatest number is ${n3}`);
    }else if(n2>n1 && n2>n3){
        console.log(`The greatest number is ${n2}`);
    }else{
        console.log(`The greates number is ${n3}`);
    }

    // to check if the given two number last digit is end's with 2 or not
    let num1=32;
    let num2=1232;
    if(num1%10 == num2%10){
        console.log("The numer end with 2", num1%10);
    }else{
        console.log("The number doesn't end with 2");
    }


    // for the given string let msg="help!" we have trim it and convert it to upperCase
    let msg="        help! ";
    console.log(msg.trim().toUpperCase());

    // for the string->let name=Apna college predict the output for the follwoing
    name.slice(4,9);
    name.indexOf("na");
    name.replace("Apna","Our");

    let Nname="Apna College";// ->
    console.log(Nname.slice(4,9));
    console.log(Nname.indexOf("na"));
    console.log(Nname.replace("Apna","Our"));


//let months = ['january', 'july', 'march', 'august'];->['july', 'june', 'march', 'august']
let months = ['january', 'july', 'march', 'august'];

months.splice(0, 2, 'july', 'june');

console.log(months);

//Return Index of "javascript" After Reversing
let arr = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
arr.reverse();
let index = arr.indexOf('javascript');
console.log(index);
console.log(arr.indexOf('javascript'));


// array reference
let a1=[1];
let a2=[1];
console.log(a1==a2);
console.log(a1===a2);


let a3=['a','b'];
let a4=a3;
a4.push('c');
console.log(a3==a4);

// nested array
let nums=
