document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // LOAD TASKS FROM LOCALSTORAGE

  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => createTaskElement(task.text, task.completed));
  }

  // SAVE TASKS TO LOCALSTORAGE
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll("li").forEach((li) => {
      tasks.push({
        text: li.querySelector(".task-text").innerText,
        completed: li.classList.contains("completed"),
      });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // C R E A T E     T A S K     E L E M E N T
  function createTaskElement(text, completed = false) {
    const li = document.createElement("li");
    li.innerHTML = `
            <span class="task-text">${text}</span>
            <button class="delete-btn">X</button>
        `;

    // MARK AS DONE
    if (completed) li.classList.add("completed");

    li.querySelector(".task-text").addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });

    // DELETE
    li.querySelector(".delete-btn").addEventListener("click", () => {
      taskList.removeChild(li);
      saveTasks();
    });

    taskList.appendChild(li);
  }

  // A D D    T A S K
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    createTaskElement(taskText);
    saveTasks();
    taskInput.value = ""; // Clear input field
  }

  //  L I S T E N E R S
  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") addTask();
  });

  // LOAD TASKS WHEN THE PAGE LOADS
  loadTasks();
});
