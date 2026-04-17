// avg find
function calculateAvg(a,b,c){
    let avg=(a+b+c)/3;
    return avg;
}

calculateAvg(10,20,30);
// console.log(calculateAvg(10,20,30));

// print table of any number
function printTable(num){
    for(let i=1; i<=10; i++){
        console.log(num + " x " + i + " = " + num*i);
    }
}
printTable(5);

// return the sum of the number from 1 to n
function sumOfN(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(sumOfN(5));

// perform concatenation of multiple strings
let str=["Hi", " ", "How", " ", "are", " ", "you?"];
function conc(str){
    let result="";
    for(let i=0; i<str.length; i++){
        result+=str[i];
    }
    return result;
}
console.log(conc(str));