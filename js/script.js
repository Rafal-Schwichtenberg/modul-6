
{
  const tasks = [
    {
      content: "nagrac lekcje",
      done: false,
    },
    {
      content: "zjesc pierogi",
      done: true,
    }
  ];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent
    });

    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  }

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButtons, index) => {
      removeButtons.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButtons, index) => {
      toggleDoneButtons.addEventListener("click", () => {
        toggleTaskDone(index);

      });
    });
  }
  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  }

  const render = () => {
    let htmlString = "";
    for (const task of tasks) {
      htmlString += ` 
              <li class="section__list-item">
              <button class="section__list-item-complete js-done">${task.done ? '✔' : ''}</button>
              <span class="section__list-item-content ${task.done ? 'task-completed' : ""}">
                ${task.content}
              </span>
              <button class="js-remove">🗑️</button>
              </li>
              `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();
  };


  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTasks").value.trim();


    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);
  };

  const init = () => {
    render();
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}

