// default parameter

function add(a,b=3){
    return a+b;
}
 console.log('add(2):', add(2)); //5
 console.log('add(2,4):', add(2,4)); //6

function subtr(a,b=3){
    return a-b;
}
 console.log('subtr(5):', subtr(5)); //2
 console.log('subtr(5,2):', subtr(5,2)); //3