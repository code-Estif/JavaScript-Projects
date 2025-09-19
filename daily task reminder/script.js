class Task {
      constructor(title, date) {
        this.title = title;
        this.date = date;
      }

      static formatDate(dateStr) {
        if (!dateStr) return "No date";
        const date = new Date(dateStr);
        return date.toDateString();
      }
    }

    let tasks = [];

    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const dateInput = document.getElementById("dateInput");

      if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
      }

      const newTask = new Task(taskInput.value, dateInput.value);
      tasks.push(newTask);

      taskInput.value = "";
      dateInput.value = "";

      showTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      showTasks();
    }

    function showTasks() {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";

      tasks.forEach((task, index) => {
        const taskCard = document.createElement("div");
        taskCard.className = "task-card";

        taskCard.innerHTML = `
          <span>${task.title} - ${Task.formatDate(task.date)}</span>
          <button class="delete-btn" onclick="deleteTask(${index})">X</button>
        `;

        taskList.appendChild(taskCard);
      });
    }