document.addEventListener("DOMContentLoaded", () => {
  function submitTask() {
    const taskInput = document.getElementById('create-task-form');
    const taskText = create-task-form.value;
  
    createTaskForm.value = '';
  
    const taskList = document.getElementById('list');
  
    const taskParagraph = document.createElement('p');
    taskParagraph.textContent = taskText;
  
    taskList.appendChild(taskParagraph);
  }
  const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', submitTask);

});
