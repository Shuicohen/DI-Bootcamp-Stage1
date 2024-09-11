import { TodoList } from "./todo.js";

const myTodoList = new TodoList();

// Add tasks to the todo list
myTodoList.addTask('Buy groceries');
myTodoList.addTask('Clean the house');
myTodoList.addTask('Finish homework');

// Mark a task as complete
myTodoList.markTaskComplete('Buy groceries');

// List all tasks
myTodoList.listTasks();