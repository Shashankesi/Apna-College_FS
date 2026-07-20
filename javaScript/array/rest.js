let numbers = [1,2,3,4,5];

function sum(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    console.log(total);
}

sum(...numbers);