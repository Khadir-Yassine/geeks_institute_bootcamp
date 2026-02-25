class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(taskName) {
    this.tasks.push({
      name: taskName,
      completed: false
    });
    console.log(`Task "${taskName}" added.`);
  }
  completeTask(taskName) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].name === taskName) {
        this.tasks[i].completed = true;
        console.log(`Task "${taskName}" marked as complete.`);
        return;
      }
    }
    console.log(`Task "${taskName}" not found.`);
  }

  listTasks() {
    console.log("\nTodo List:");
    for (let i = 0; i < this.tasks.length; i++) {
      let status = this.tasks[i].completed ? "yes" : "no";
      console.log(`${i + 1}. ${this.tasks[i].name} - ${status}`);
    }
  }
}

export default TodoList;