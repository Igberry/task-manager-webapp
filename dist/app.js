// app.ts
import { TaskItem } from "./task.js";
import { saveTasks, loadTasks } from "./storage.js";
// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
let tasks = loadTasks().map(t => new TaskItem(t.id, t.title, t.completed));
// Render tasks
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        var _a;
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
        (_a = li.querySelector("span")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            task.toggleComplete();
            saveTasks(tasks);
            renderTasks();
        });
        editBtn.addEventListener("click", () => {
            const newTitle = prompt("Edit task title:", task.title);
            if (newTitle !== null && newTitle.trim() !== "") {
                task.title = newTitle.trim();
                saveTasks(tasks);
                renderTasks();
            }
        });
        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks(tasks);
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
    const newTask = new TaskItem(Date.now().toString(), title);
    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks();
    taskInput.value = "";
});
// Initial render
renderTasks();
