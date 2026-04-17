const calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
    div:function(a,b){
        if(b!==0){
            return a/b;
        }else{
            return "Division by zero is not allowed";
        }
    }
};

console.log(calculator.add(5,10)); // 15
console.log(calculator.sub(5,10)); // -5
console.log(calculator.mul(5,10)); // 50
console.log(calculator.div(5,10)); // 0.5
console.log(calculator.div(5,0)); // Division by zero is not allowed