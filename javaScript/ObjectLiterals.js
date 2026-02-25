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

let delhi={
    name:"Delhi",
    population: 20000000,
    famousFor: "Monuments",
    longitude: 77.1025,
    latitude: 28.7041,
    getInfo: function() {
        console.log(`${this.name} has a population of ${this.population} and is famous for ${this.famousFor}.`);
    }
}
delhi.getInfo();