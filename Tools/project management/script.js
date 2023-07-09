// Function to add a new task
function addTask(event) {
  event.preventDefault();

  // Get form inputs
  const taskName = document.getElementById('taskName').value;
  const taskAssignee = document.getElementById('taskAssignee').value;
  const taskPriority = document.getElementById('taskPriority').value;
  const taskDueDate = document.getElementById('taskDueDate').value;

  // Create a new task item
  const taskItem = document.createElement('li');
  taskItem.classList.add(taskPriority);
  taskItem.innerHTML = `
    <span>${taskName}</span> - Assignee: ${taskAssignee}
    <span class="delete-btn">X</span>
    <span class="due-date">Due: ${taskDueDate}</span>
  `;

  // Append the task item to the task list
  const taskList = document.getElementById('taskList');
  taskList.appendChild(taskItem);

  // Reset form inputs
  document.getElementById('taskName').value = '';
  document.getElementById('taskAssignee').value = '';
  document.getElementById('taskPriority').value = 'low';
  document.getElementById('taskDueDate').value = '';

  // Add event listener for the delete button
  const deleteBtn = taskItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', deleteTask);

  // Save tasks in browser's local storage
  saveTasks();
}

// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target.parentNode;
  const taskList = taskItem.parentNode;
  taskList.removeChild(taskItem);

  // Save tasks in browser's local storage
  saveTasks();
}

// Function to save tasks in local storage
function saveTasks() {
  const taskList = document.getElementById('taskList');
  const tasks = [];

  // Get task details from the task list
  const taskItems = taskList.getElementsByTagName('li');
  for (let i = 0; i < taskItems.length; i++) {
    const taskItem = taskItems[i];
    const taskName = taskItem.querySelector('span').textContent;
    const taskAssignee = taskItem.textContent.replace(taskName + ' - Assignee: ', '');
    const taskPriority = taskItem.classList[0];
    const taskDueDate = taskItem.querySelector('.due-date').textContent.replace('Due: ', '');

    tasks.push({ name: taskName, assignee: taskAssignee, priority: taskPriority, dueDate: taskDueDate });
  }

  // Save tasks in local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
  const taskList = document.getElementById('taskList');
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  if (tasks) {
    tasks.forEach(task => {
      const taskItem = document.createElement('li');
      taskItem.classList.add(task.priority);
      taskItem.innerHTML = `
        <span>${task.name}</span> - Assignee: ${task.assignee}
        <span class="delete-btn">X</span>
        <span class="due-date">Due: ${task.dueDate}</span>
      `;

      taskList.appendChild(taskItem);

      const deleteBtn = taskItem.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', deleteTask);
    });
  }
}

// Event listener for the form submission
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', addTask);

// Event listener for loading tasks from local storage on page load
window.addEventListener('load', loadTasks);

// Check due dates and display visual indicators on page load
window.addEventListener('load', checkDueDates);

// Request permission for browser notifications
requestNotificationPermission();

// Save tasks in browser's local storage
saveTasks();


  

