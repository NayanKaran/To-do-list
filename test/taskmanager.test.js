import TaskManager from '../src/taskmanager'

describe("Testing add item & remove item", () => {
    test("Add item", ()=> {
        let newList = new TaskManager('tasks');
        newList.add("New Task");
        expect(newList.taskList.length).toBe(1);
        newList.add("New Task");
        newList.add("New Task");
        expect(newList.taskList.length).toBe(3);
    })

})