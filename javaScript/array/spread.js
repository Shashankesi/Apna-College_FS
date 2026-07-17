let arr=[1,2,3,4,5];
console.log(Math.min(...arr)); //1

console.log(...arr); //1 2 3 4 5


// spread with array literal

let arr1=[1,2,3,4,5];

let newArr=[...arr1];
console.log(newArr); //[1,2,3,4,5]

let newArr1=[...arr1,6,7,8];
console.log(newArr1); //[1,2,3,4,5,6,7,8]
