
{
    const tasks =[
   {
    content:"nagrac lekcje",
    done: false,
   }
   {
    content:"zjesc pierogi",
    done:true,}
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

    const render = () => {
      let htmlString = "";
      for (const task of tasks) {
        htmlString += ` 
              <li
              ${task.done ? "style=\"text-decoration: line-trough\"" : ""}
              >
              <button class="js-remove">usun<button>
              ${task.content}
              </li>
              `;
      }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButtons, index ) => {
          removeButtons.addEventListener ("click", () => {
            removeTask(index);
           
          });
         });
      };
      

    const onFormSubmit = (event) => {
        event.preventDefault();
  
        const newTaskContent = document.querySelector(".js-newTasks") .value.trim();
      };
      
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
  
  /🗑 🗑️/;