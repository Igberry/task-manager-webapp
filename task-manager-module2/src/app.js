"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
const storage_1 = require("./storage");
// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
let tasks = (0, storage_1.loadTasks)().map(t => new task_1.TaskItem(t.id, t.title, t.completed));
// Render tasks
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task-item";
        if (task.completed)
            li.classList.add("completed");
        li.innerHTML = `
      <span>${task.title}</span>
      <div class="task-buttons">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;
        const editBtn = li.querySelector(".edit");
        const deleteBtn = li.querySelector(".delete");
        // Mark complete on click of text
        li.querySelector("span")?.addEventListener("click", () => {
            task.toggleComplete();
            (0, storage_1.saveTasks)(tasks);
            renderTasks();
        });
        editBtn.addEventListener("click", () => {
            const newTitle = prompt("Edit task title:", task.title);
            if (newTitle !== null && newTitle.trim() !== "") {
                task.title = newTitle.trim();
                (0, storage_1.saveTasks)(tasks);
                renderTasks();
            }
        });
        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            (0, storage_1.saveTasks)(tasks);
            renderTasks();
        });
        taskList.appendChild(li);
    });
}
// Add task
addTaskBtn.addEventListener("click", () => {
    const title = taskInput.value.trim();
    if (title === "")
        return;
    const newTask = new task_1.TaskItem(Date.now().toString(), title);
    tasks.push(newTask);
    (0, storage_1.saveTasks)(tasks);
    renderTasks();
    taskInput.value = "";
});
// Initial render
renderTasks();
//# sourceMappingURL=app.js.map