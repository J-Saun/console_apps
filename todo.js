console.clear();

// Style console responses
const consoleStyle =
  "color: white; font-style: bold; background-color: orangered;padding: 3px";
console.log("%c'cmd' for a list of commands", consoleStyle);

const commands = ["List", "Add", "Delete", "Quit"];

let input = prompt("Welcome to the Todo List!");

const todoList = ["Walk bird", "Milk almonds"];

while (input !== "quit" && input !== "q") {
  if (input.toLowerCase() === "cmd") {
    console.clear();
    for (let i = 0; i < commands.length; i++) {
      console.log(`%c${commands[i]}`, consoleStyle);
    }
  } else if (input.toLowerCase() === "list") {
    console.clear();
    console.log("%c     Todo List    ", consoleStyle);
    console.log("%c******************", consoleStyle);

    if (todoList.length === 0) {
      console.log("  Currently empty");
    }
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i + 1}: ${todoList[i]}`);
    }
    console.log("%c******************", consoleStyle);
  } else if (input.toLowerCase() === "add") {
    const newTodo = prompt("What would you like to add?");
    todoList.push(newTodo);
    console.clear();
    console.log(`${newTodo} has been added`);
  } else if (input.toLowerCase() === "delete") {
    const index = parseInt(prompt("Enter item to delete"));
    if (!Number.isNaN(index)) {
      const deleted = todoList.splice(index - 1, 1);
      console.log(`${deleted[0]} has been removed`);
    } else {
      console.clear();
      console.log("Please enter a valid item number");
    }
  }
  input = prompt("What would you like to do?");
}
console.clear();
console.log("%cGoodbye!", consoleStyle);
