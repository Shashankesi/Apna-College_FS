let numbers=[1,2,3,4,5];
let total=0;
function sum(...numbers){
    for(let i=0;i<numbers.length;i++){
        console.log(numbers[i]);
        total += numbers[i];
    }
    console.log(total);
};