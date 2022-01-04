console.clear();
const consoleStyle =
  "color: white; font-style: bold; background-color: orangered;padding: 3px";
console.log("%c'[C]md' for a list of commands", consoleStyle);
const commands = ["[L]ist", "[A]dd", "[D]elete", "[Q]uit"];

let input = prompt("Welcome to the todo list!");

const todos = [];

// DRY List Function
function printList() {
  console.clear();
  console.log("%c     Todo List    ", consoleStyle);
  console.log("%c******************", consoleStyle);

  if (todos.length === 0) {
    console.log("  Currently empty");
  }
  for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}: ${todos[i]}`);
  }
  console.log("%c******************", consoleStyle);
}

// // DRY Action Prompt Function
function actionPrompt(action) {
  input = prompt(`What would you like to ${action}?`);
}

while (input !== "quit" && input !== "q") {
  console.clear();
  if (input.toLowerCase() === "cmd" || input.toLowerCase() === "c") {
    // input = prompt("What would you like to do?");
    console.clear();
    for (let i = 0; i < commands.length; i++) {
      console.log(`%c${commands[i]}`, consoleStyle);
    }
    actionPrompt("do");
  }
  if (input.toLowerCase() === "list" || input.toLowerCase() === "l") {
    printList();
  }
  if (input.toLowerCase() === "add" || input.toLowerCase() === "a") {
    actionPrompt("add");
    todos.push(input);
    // printList();
    console.log(`${input} added to the list!`);
  }
  if (input.toLowerCase() === "delete" || input.toLowerCase() === "d") {
    // printList();
    actionPrompt("delete");

    // revert back to 0 based index
    const index = parseInt(input - 1);

    // check for valid index number
    if (!Number.isNaN(index)) {
      todos.splice(index, 1);
      printList();

      console.log(`Item ${input} removed from the list!`);
    } else {
      prompt("Please select a list number");
      todos.splice(index, 1);
      printList();
      console.log(`Item ${input} removed from the list!`);
    }
  }

  input = prompt("Welcome to the todo list!");
}
console.clear();
console.log("%cGoodbye!", consoleStyle);
