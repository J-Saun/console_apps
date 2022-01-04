console.clear();

console.log("'cmd' for a list of commands");
const commands = ["list", "add", "delete", "quit"];

let input = prompt("Welcome to the todo list!");

const todos = [];

// List Function
function list() {
  console.clear();
  console.log("   Todo List  ");
  console.log("****************");

  if (todos.length === 0) {
    console.log("currently empty");
  }
  for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}: ${todos[i]}`);
  }
  console.log("****************");
}

while (input !== "quit" && input !== "q") {
  console.clear();
  if (input.toLowerCase() === "cmd") {
    // input = prompt("What would you like to do?");
    console.clear();
    for (let i = 0; i < commands.length; i++) {
      console.log(commands[i]);
    }
    input = prompt("What would you like to do?");
  }
  if (input.toLowerCase() === "list") {
    list();
  }
  if (input.toLowerCase() === "add") {
    input = prompt("What would you like to add?");
    todos.push(input);
  }
  if (input.toLowerCase() === "delete") {
    console.clear();
    list();
    input = prompt("What would you like to delete?");
  }

  input = prompt("Welcome to the todo list!");
}
console.clear();
console.log("Closing App");
