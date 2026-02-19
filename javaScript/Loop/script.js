let todo = [];
let req= prompt("What do you want to do?");

while(true){
    if(req === "quit"){
        console.log("OK, YOU QUIT THE APP");
        break;
    }

    if(req === "list"){
        console.log("**********");  
        for(task of todo){
            console.log(task);
        }
        console.log("**********");
    }else if(req === "new"){
        let newTask = prompt("Enter new task");
        todo.push(newTask);
        console.log(`${newTask} added to the list`);
    }
        req= prompt("What do you want to do?");
}