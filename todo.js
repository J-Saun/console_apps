console.clear();

console.log("'cmd' for a list of commands");
const commands = ["[L]ist", "[A]dd", "[D]elete", "[Q]uit"];

let input = prompt("Welcome to the todo list!");

const todos = [];

// DRY List Function
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
// DRY Action Prompt Function
function actionPrompt(action) {
  input = prompt(`What would you like to ${action}?`);
}

while (input !== "quit" && input !== "q") {
  console.clear();
  if (input.toLowerCase() === "cmd" || input.toLowerCase() === "c") {
    // input = prompt("What would you like to do?");
    console.clear();
    for (let i = 0; i < commands.length; i++) {
      console.log(commands[i]);
    }
    actionPrompt("do");
  }
  if (input.toLowerCase() === "list" || input[0].toLowerCase() === "l") {
    list();
  }
  if (input.toLowerCase() === "add" || input.toLowerCase() === "a") {
    actionPrompt("add");
    todos.push(input);
  }
  if (input.toLowerCase() === "delete" || input.toLowerCase() === "d") {
    console.clear();
    list();
    actionPrompt("delete");
  }

  input = prompt("Welcome to the todo list!");
}
console.clear();
console.log("Closing App");
