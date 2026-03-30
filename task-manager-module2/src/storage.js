"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveTasks = saveTasks;
exports.loadTasks = loadTasks;
const task_1 = require("./task");
const STORAGE_KEY = "tasks";
function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
function loadTasks() {
    const tasksJSON = localStorage.getItem(STORAGE_KEY);
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}
//# sourceMappingURL=storage.js.map