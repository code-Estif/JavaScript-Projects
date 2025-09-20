// Base class
    class Item {
      constructor(name) {
        this.name = name;
      }
    }

    // Project class inherits Item
    class Project extends Item {
      constructor(name) {
        super(name);
        this.tasks = [];
      }

      addTask(task) {
        this.tasks.push(task);
      }

      removeTask(taskIndex) {
        this.tasks.splice(taskIndex, 1);
      }
    }

    // Task class inherits Item
    class Task extends Item {
      constructor(name) {
        super(name);
        this.completed = false;
      }

      toggleComplete() {
        this.completed = !this.completed;
      }
    }

    // DOM & state
    const projects = [];
    const projectsContainer = document.getElementById('projectsContainer');
    const addProjectBtn = document.getElementById('addProjectBtn');
    const newProjectName = document.getElementById('newProjectName');

    addProjectBtn.addEventListener('click', () => {
      const name = newProjectName.value.trim();
      if (name === '') return;
      const project = new Project(name);
      projects.push(project);
      newProjectName.value = '';
      render();
    });

    function render() {
      projectsContainer.innerHTML = '';
      projects.forEach((project, pIndex) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const header = document.createElement('div');
        header.className = 'project-header';
        const title = document.createElement('h2');
        title.textContent = project.name;
        header.appendChild(title);

        const tasksUl = document.createElement('ul');
        tasksUl.className = 'tasks-list';

        // tasks inside project
        project.tasks.forEach((task, tIndex) => {
          const li = document.createElement('li');
          const span = document.createElement('span');
          span.textContent = task.name;
          if (task.completed) {
            span.className = 'completed';
          }
          span.addEventListener('click', () => {
            task.toggleComplete();
            render();
          });

          const delBtn = document.createElement('button');
          delBtn.textContent = 'Delete';
          delBtn.addEventListener('click', () => {
            project.removeTask(tIndex);
            render();
          });

          li.appendChild(span);
          li.appendChild(delBtn);
          tasksUl.appendChild(li);
        });

        // input for new task in this project
        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.placeholder = 'New task';
        const taskBtn = document.createElement('button');
        taskBtn.textContent = 'Add Task';
        taskBtn.addEventListener('click', () => {
          const taskName = taskInput.value.trim();
          if (taskName === '') return;
          const newTask = new Task(taskName);
          project.addTask(newTask);
          taskInput.value = '';
          render();
        });

        projectCard.appendChild(header);
        projectCard.appendChild(tasksUl);
        projectCard.appendChild(taskInput);
        projectCard.appendChild(taskBtn);

        projectsContainer.appendChild(projectCard);
      });
    }

    // Initial render
    render();