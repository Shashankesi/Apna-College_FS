const max = Number(prompt("Enter the maximum number for the guessing game:"));

const randomNum = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if (guess === "quit") {
        console.log("Game Over! The number was " + randomNum);
        break;
    }

    guess = Number(guess); 

    if (guess === randomNum) {
        console.log("Congratulations! You guessed the number " + randomNum);
        break;
    } 
    else if (guess < randomNum) {
        guess = prompt("Too low! Try again. Guess the number or type 'quit' to exit:");
    } 
    else if (guess > randomNum) {
        guess = prompt("Too high! Try again. Guess the number or type 'quit' to exit:");
    } 
    else {
        guess = prompt("Invalid input! Guess again or type 'quit':");
    }
}