"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskItem = void 0;
class TaskItem {
    id;
    title;
    completed;
    constructor(id, title, completed = false) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
    toggleComplete() {
        this.completed = !this.completed;
    }
}
exports.TaskItem = TaskItem;
//# sourceMappingURL=task.js.map