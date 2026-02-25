import TodoList from "./todo.mjs";

const myTodo = new TodoList();

// Add tasks
myTodo.addTask("Study JavaScript");
myTodo.addTask("Go to gym");
myTodo.addTask("Buy groceries");
myTodo.completeTask("Go to gym");
myTodo.listTasks();