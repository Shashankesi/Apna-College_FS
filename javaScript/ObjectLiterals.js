//object literals
let person = {
    name: "Shashank",
    age: 22,
    hobbies: ["coding", "gaming", "cooking"],
    isStudent: true,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};