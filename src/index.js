import _ from "lodash";
import "./style.css";
import dragDropIcon from './images/drag-drop-icon.svg';

let toDoList = [
  {
    description: "Demo Task1",
    completed: false,
    index: 0,
  },
  {
    description: "Demo Task1",
    completed: false,
    index: 1,
  },
  {
    description: "Demo Task1",
    completed: false,
    index: 2,
  },
];

function getListItem(task) {
  const todoTaskElement = document.createElement('li');
  todoTaskElement.classList.add('todo-list-item');
  {
    const todoTaskStatus = document.createElement('input');
    todoTaskStatus.type = 'checkbox';
    todoTaskStatus.checked = task.completed;
    todoTaskStatus.classList.add('task-status');
    todoTaskElement.appendChild(todoTaskStatus)
  }
  {
    const todoTaskDescription = document.createElement('p');
    todoTaskDescription.textContent = task.description;
    todoTaskDescription.classList.add('task-description');
    todoTaskElement.appendChild(todoTaskDescription)
  }
  {
    const todoTaskDragIcon = document.createElement('img');
    todoTaskDragIcon.src = dragDropIcon
    todoTaskDragIcon.alt = 'drag drop'
    todoTaskDragIcon.classList.add('task-drag-icon');
    todoTaskElement.appendChild(todoTaskDragIcon)
  }
  return todoTaskElement;
}

function updateToDoListToHTML() {
  toDoList.forEach((task) =>
    document.getElementById("todo-list").appendChild(getListItem(task))
  );
}

updateToDoListToHTML();
