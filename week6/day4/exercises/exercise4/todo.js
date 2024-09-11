export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({task, completed: false});
    }

    markTaskComplete(taskName) {
        const task = this.tasks.find(t => t.task === taskName);
        if (task) {
            task.completed = true;
        } else {
            console.log(`Task ${taskName} not found`);
        }
    }

    listTasks() {
        console.log("Todo List:");
        this.tasks.forEach((t, index) => {
            const status = t.completed ? "Completed" : "Incomplete";
            console.log(`${index + 1}. ${t.task} - ${status}`);
        });
    }
}
