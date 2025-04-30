import { formatDate } from "./utils.js"

export class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTasks(description, completed = false) {
        const task = {
            description,
            date : formatDate(new Date()),
            completed : completed,
        };
        this.tasks.push(task);
    }

}