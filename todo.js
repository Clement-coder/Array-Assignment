// Create a todo list program

let todos = []

function addTodo(todo){
    todos.push(todo);
    console.log("todo added:", todo);
}
addTodo("Buy car");
addTodo("carry os");

function todoLists(todos){
    console.log(`todo list : ${todos}`);
}

todoLists(todos);