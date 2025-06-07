console.log("Task Application");

function handleAddTask() {
  const taskInput = document.getElementById("input");
  const taskList = document.getElementById("list");
  const task = taskInput.value;
  if (task.trim() === "") return;

  const li = document.createElement("li");
  li.innerText = task;
  taskList.appendChild(li);
  taskInput.value = "";
}
