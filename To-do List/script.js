const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    let tasks = []; // Array to store tasks

    // Function to render tasks
    const renderTasks = () => {
      taskList.innerHTML = ''; // Clear existing list

      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;

        if (task.done) li.classList.add('done');

        // Buttons container
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'task-buttons';

        // Done button
        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', () => {
          task.done = !task.done; // Toggle done
          renderTasks(); // Callback to update UI
        });

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
          tasks.splice(index, 1); // Remove task
          renderTasks(); // Callback to update UI
        });

        buttonsDiv.appendChild(doneBtn);
        buttonsDiv.appendChild(deleteBtn);
        li.appendChild(buttonsDiv);
        taskList.appendChild(li);
      });
    };

    // Add task button
    addBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') return; // Ignore empty input
      tasks.push({ text: taskText, done: false }); // Add task to array
      taskInput.value = '';
      renderTasks(); // Callback to update UI
    });

    // Optional: press Enter to add task
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addBtn.click();
    })