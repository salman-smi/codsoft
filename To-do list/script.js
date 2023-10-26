function addTask() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let taskList = document.getElementById("taskList");
        let li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}