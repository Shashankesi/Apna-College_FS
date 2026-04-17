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