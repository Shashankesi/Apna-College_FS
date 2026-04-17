// it's a function that does one or both:
// 1. takes one or more functions as arguments
// 2. returns a function as its result

// example
function multipleGreeting(func,n){
    for(let i=0;i<n;i++){
        func();
    }
}

let greet=function(){
    console.log("Hello!");
}

multipleGreeting(greet,3); // Hello! Hello! Hello!

// another example of return a function

    let odd= function(n){
        return !(n%2===0);
    }

    let even=function(n){
        return n%2===0;
    }   

    function oddEvenChecker(request){
        let n=10;
        if(request==="odd"){
            console.log(!(n%2===0));
            return odd;
        }else if(request==="even"){
            console.log(n%2===0);
            return even;
        }else{
            console.log("Invalid request");
        }
    }
