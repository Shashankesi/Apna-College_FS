// fucntion scope
function sum(a,b){
    let result=a+b;
    return result;
}
console.log(sum(5, 10));
// console.log(result); // error because result is not defined outside the function

// block scope
let sum=54;
function calculateSum(a,b){
    let sum=a+b;
    return sum;
}
console.log(calculateSum(5, 10)); // 15
console.log(sum); // 54, because the sum variable inside the function is different from the sum variable outside the function

// lexical scope
function outerFunction(){
    let outerVar="I am from outer function";
    function innerFunction(){
        console.log(outerVar); // inner function can access the variable of outer function
    }   
    innerFunction();
}
outerFunction(); // I am from outer function