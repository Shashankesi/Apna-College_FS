let n=5;
for(let i=0;i<n;i++){
    console.log("Welcome");
}

// infinite loop condition:
//-> ending condition missing or the value is always true
// for(let i=1;i>0;i++){
//     console.log(i);
// }

// nested loop
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        console.log(i+" "+j);
    }
}

// while loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}   

//guess the movie game
const favMovie="Avenger";
let userInput= prompt("Guess the movie name:");
while(favMovie !== userInput && userInput !== "quit"){
   alert("Wrong guess! Try again.. or type 'quit' to exit.");
    userInput= prompt("Guess the movie name:");
}

// break statement
for(let i=1;i<=10;i++){
    if(i===5){
        break; // exit the loop when i is 5
    }
    console.log(i);
}

// loops with array
let fruits=["apple","banana","orange"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// nested loop with nested array
let heroes=[
    ["Iron Man","Captain America"],
    ["Thor","Hulk"],
    ["Black Widow","Hawkeye"]
];
for(let i=0;i<heroes.length;i++){
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }   
}

// for of loop
for(let fruit of fruits){
    console.log(fruit);
}

for(let char of "apnacollege"){
    console.log(char);
}

// nested for of loop
let heroes1 = [
    ["Ironman", "Spiderman", "Thor"],
    ["Superman", "Batman", "Flash"]
];

for (let heroGroup of heroes) {
    for (let hero of heroGroup) {
        console.log(hero);
    }
}
