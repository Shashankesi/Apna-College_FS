// linear data Structure
let student1="Shashank";
let student2="Aman";
let student3="Aash";
// array represntation
let students=["Shashank","Aman","Aash"];
console.log(students[0]);
console.log(students[2]);
console.log(students[0][0]);


// Array->Mutable
let fruits=["Mango","Apple","Banana"];
fruits[0]="Litchi";
fruits[10]="Aaam";
console.log(fruits);

//Array Methods
let cars=["BMW","Mahindra","Maruti","Toyota"];

//push operation->add the element at the end
cars.push("Ferrari");
console.log(cars);

//pop Operation->remove and return the last element
cars.pop();
console.log(cars);

//unshift operation->add the element at the start
cars.unshift("Audi");
console.log(cars);

//shift operator->delete from start and return it
cars.shift();
console.log(cars);

// let's take the example of insta
let follower=["Nisha","Gita","Mita"];
console.log(follower);

let blocked=follower.shift();
console.log(follower);
console.log(blocked);


// indexOf Method:-indexOf() is used to find the position (index) of a value in an array or a string.
let color=["Green","Red","Blue"];
//->O/P=0
console.log(color.indexOf("Green"));
//O/P->-1
console.log(color.indexOf("Black"));

//includes->search for value
console.log(color.includes("Green"));//->true

console.log(color.includes("Black"));//->false

//Concatenation means joining two or more strings together.

//1:using + operator
let str1="Belive in GOD'S";
let str2="Plan, His plan are always better than your's";

let result=str1+" "+str2;
console.log(result);

// using concat() method
let result1=str1.concat(str2);
console.log(result1);

//Reverse:reverse() is used to reverse the order of elements in an array.
let number=[1,2,3,4,5];
console.log(number.reverse());
console.log(number);// the change had applied to the array 

// slice method in the array

let colors=["Red","Black","White","Pink","Yellow","Violet","Pink"];

// print all the array as start and end are not provided
console.log(colors.slice());
// print all the array element from starting index2  to end 
console.log(colors.slice(2));
// print the element from index 2 to 4
console.log(colors.slice(2,4));

// print all the element from end as it's a negative number
console.log(colors.slice(-2));

// splice() is used to add, remove, or replace elements in an array.

// 👉 It modifies the original array.

// 🔹 📌 Syntax
// array.splice(start, deleteCount, item1, item2, ...)


// start → index where changes begin

// deleteCount → how many elements to remove

// item1, item2... → elements to add (optional)

// Remove Element
let colorN=["Black","Red","Yellow"];
colorN.splice(1,2);
console.log(colorN);// it delets the index 1 and 2 element

// Add Element
let fruit=["Apple","Mango","Litchi"];
fruit.splice(1,0,"Orange");
console.log(fruit)

//Replace Element
let numbers=[1,2,3,4,5];
numbers.splice(2,1,99);
console.log(numbers);


