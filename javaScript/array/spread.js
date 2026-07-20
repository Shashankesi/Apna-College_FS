let arr=[1,2,3,4,5];
console.log(Math.min(...arr)); //1

console.log(...arr); //1 2 3 4 5


// spread with array literal

let arr1=[1,2,3,4,5];

let newArr=[...arr1];
console.log(newArr); //[1,2,3,4,5]

let newArr1=[...arr1,6,7,8];
console.log(newArr1); //[1,2,3,4,5,6,7,8]

// spread with object literal
let data={
    email:"shashankesi224@gmail.com",
    password:"123456"
};

let obj1={...arr};
console.log(obj1); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

let dataCopy={...data, id:1};
console.log(dataCopy); //   { email: 'shashankesi224@gmail.com', password: '123456', id: 1 }

