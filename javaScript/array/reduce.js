console.log([1,2,3,4].reduce((acc,el)=>
     { console.log(acc); 
        return acc+el; 
    })); //10


    // find maximum number in array
    let nums=[1,2,3,4,5,6,7,8,9];
    let max=nums.reduce((max,el)=>{
        if(el>max){
            return el;
        }else{
            return max;
        }
    });

    console.log('max:', max); //9