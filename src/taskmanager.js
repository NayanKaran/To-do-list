import Task from './task.js'

export default class TaskManager {
    constructor(key) {
        this.key = key;
        this.taskList = JSON.parse(localStorage.getItem(key)) || [];
    }

    add = (description) => {
        let newTask = new Task(description, this.taskList.length + 1);
        this.taskList.push(newTask);

        localStorage.setItem(this.key, JSON.stringify(this.taskList));
        return newTask;
    }

    updateDescription = (description, index) => {
        this.taskList[index -1].description = description;

        localStorage.setItem(this.key, JSON.stringify(this.taskList));
    }

    updateIndex = () => {
        this.taskList.forEach((task, index) => {
            task.index = index + 1;
        })
    }

    remove = (index) => {
        this.taskList.splice(index - 1, 1);
        this.updateIndex();
        localStorage.setItem(this.key, JSON.stringify(this.taskList));
    }

    swap = (index1, index2) => {
        this.taskList[index1 - 1].index = index2;
        this.taskList[index2 - 1].index = index1;
        let temp = this.taskList[index1 - 1]
        this.taskList[index1 - 1] = this.taskList[index2 - 1];
        this.taskList[index2 - 1] = temp;

        localStorage.setItem(this.key, JSON.stringify(this.taskList));
    }
}