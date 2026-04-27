let inp = document.querySelector("input");
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    console.dir(inp);        // Correct
    console.log(inp.value);  // Prints the entered value
});

// inp.addEventListener("keydown",function(event){
//     console.dir(event);
//     console.log("event key is: "+event.key);
//     console.log("event code is: "+event.code);
//     console.log("key was pressed");
// });