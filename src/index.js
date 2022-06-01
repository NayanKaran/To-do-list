// import _ from 'lodash';
import './reset.css';
import './style.css';
import dragDropIcon from './images/drag-drop-icon.svg';
import deleteIcon from './images/delete-icon.svg';
import toDoList from './todolist.js';
import updateListItem from './taskStatusManager.js';

function getListItem(task) {
  const todoTaskElement = document.createElement('li');
  let focusedOnElement = false;
  todoTaskElement.classList.add('todo-list-item');
  {
    const todoTaskStatus = document.createElement('input');
    todoTaskStatus.type = 'checkbox';
    todoTaskStatus.checked = task.completed;
    todoTaskStatus.addEventListener('change', () => {
      updateListItem(todoTaskStatus.checked, task.index);
    });
    todoTaskStatus.classList.add('task-status');
    todoTaskElement.appendChild(todoTaskStatus);
  }
  {
    const todoTaskDescription = document.createElement('input');
    todoTaskDescription.value = task.description;
    todoTaskDescription.classList.add('task-description');

    todoTaskDescription.addEventListener('keyup', (event) => {
      toDoList.updateDescription(event.target.value, task.index);
    });

    todoTaskDescription.addEventListener('focus', (event) => {
      focusedOnElement = true;
      event.target.nextSibling.src = deleteIcon;
      event.target.nextSibling.alt = 'delete';
      event.target.nextSibling.className = 'delete-icon';
      event.target.style.backgroundColor = '#fffeca';
      event.target.parentElement.style.backgroundColor = '#fffeca';
    });

    todoTaskDescription.addEventListener('blur', (event) => {
      focusedOnElement = false;
      event.target.nextSibling.src = dragDropIcon;
      event.target.nextSibling.alt = 'drag drop';
      event.target.nextSibling.className = 'task-drag-icon';
      event.target.style.backgroundColor = '';
      event.target.parentElement.style.backgroundColor = '';
    });

    todoTaskElement.appendChild(todoTaskDescription);
  }
  {
    const todoTaskDragIcon = document.createElement('img');
    todoTaskDragIcon.src = dragDropIcon;
    todoTaskDragIcon.alt = 'drag drop';
    todoTaskDragIcon.className = 'task-drag-icon';
    todoTaskDragIcon.addEventListener('mousedown', () => {
      if (focusedOnElement) {
        todoTaskElement.remove();
        toDoList.remove(task.index);
      }
    });
    todoTaskElement.appendChild(todoTaskDragIcon);
  }
  return todoTaskElement;
}

function updateToDoListToHTML() {
  toDoList.taskList.forEach((task) => document.getElementById('todo-list').appendChild(getListItem(task)));
}

function addTask(description) {
  if (description) { document.getElementById('todo-list').appendChild(getListItem(toDoList.add(description))); }
}

const addItemElement = document.getElementById('add-item');

addItemElement.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTask(event.target.value);
    event.target.value = '';
  }
});

document.querySelector('#add-item-container > img').addEventListener('click', (event) => {
  event.preventDefault();
  addTask(addItemElement.value);
  addItemElement.value = '';
});

updateToDoListToHTML();
