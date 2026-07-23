// array with destructuring
let arr = [1, 2, 3, 4, 5];
let [a, b, c] = arr;
console.log(a, b, c); // Output: 1 2 3

// but without destructuring
let a=arr[0];
let b=arr[1];
let c=arr[2];
console.log(a, b, c); // Output: 1 2 3

// now object destructuring
let obj = {name: 'John', age: 30, city: 'New York'};
let {name, age, city} = obj;
console.log(name, age, city); // Output: John 30 New York

const student = {
    name:'Shashank',
    username:'shashankesi',
    age:22,
    subjects:['Maths','Science','English'],
    class:'12th',
    phone: 1234567890
};

let{username,age} = student;
console.log(username,age); // Output: shashankesi 22

// but without destructuring
let name = obj.name;
let age = obj.age;
let city = obj.city;
console.log(name, age, city); // Output: John 30 New York