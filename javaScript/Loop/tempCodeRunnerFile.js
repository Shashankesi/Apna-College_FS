let heroes=[
    ["Iron Man","Captain America"],
    ["Thor","Hulk"],
    ["Black Widow","Hawkeye"]
];
for(let i=0;i<heroes.length;i++){
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }   
}

// for of loop
for(let fruit of fruits){
    console.log(fruit);
}

for(let char of "apnacollege"){
    console.log(char);
}

// nested for of loop
for( heroGroup of heroes){
    for( hero of heroGroup){ 
        console.log(hero);
    }
}