import toDoList from './todolist.js';
import Sortable from 'sortablejs';

Sortable.create(document.getElementById('todo-list'), {
  handle: '.task-drag-icon',
  animation: 150,
  onUpdate: function (event) {
		toDoList.updateList(event.oldIndex, event.newIndex);
	},
});