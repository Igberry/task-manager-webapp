let tasks = [];

/* Load tasks */

window.onload = function(){

const storedTasks = localStorage.getItem("tasks");

if(storedTasks){
tasks = JSON.parse(storedTasks);
displayTasks();
}

};

/* Add Task */

function addTask(){

const taskInput = document.getElementById("taskInput");
const taskText = taskInput.value.trim();

if(taskText === ""){
alert("Please enter a task");
return;
}

tasks.push({
text:taskText,
completed:false
});

saveTasks();
displayTasks();

taskInput.value="";
}

/* Display Tasks */

function displayTasks(){

const taskList=document.getElementById("taskList");
const taskCount=document.getElementById("taskCount");

taskList.innerHTML="";

tasks.forEach((task,index)=>{

const li=document.createElement("li");

const leftDiv=document.createElement("div");

const checkbox=document.createElement("input");
checkbox.type="checkbox";
checkbox.checked=task.completed;

checkbox.onclick=function(){
tasks[index].completed=!tasks[index].completed;
saveTasks();
displayTasks();
};

const taskSpan=document.createElement("span");
taskSpan.textContent=task.text;

if(task.completed){
taskSpan.classList.add("completed");
}

leftDiv.appendChild(checkbox);
leftDiv.appendChild(taskSpan);

const buttonDiv=document.createElement("div");
buttonDiv.classList.add("task-buttons");

/* Edit Button */

const editBtn=document.createElement("button");
editBtn.textContent="Edit";
editBtn.classList.add("edit");

editBtn.onclick=function(){

const newTask=prompt("Edit task:",task.text);

if(newTask!==null && newTask.trim()!==""){
tasks[index].text=newTask.trim();
saveTasks();
displayTasks();
}

};

/* Delete Button */

const deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete";
deleteBtn.classList.add("delete");

deleteBtn.onclick=function(){
tasks.splice(index,1);
saveTasks();
displayTasks();
};

buttonDiv.appendChild(editBtn);
buttonDiv.appendChild(deleteBtn);

li.appendChild(leftDiv);
li.appendChild(buttonDiv);

taskList.appendChild(li);

});

taskCount.textContent="Total Tasks: "+tasks.length;

}

/* Save Tasks */

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

/* Dark Mode */

function toggleDarkMode(){
document.body.classList.toggle("dark");
}