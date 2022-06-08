import TaskManager from '../src/taskmanager'

describe("Testing add item & remove item", () => {
    let newList = new TaskManager('tasks');
    test("Add item", ()=> {
        newList.add("New Task");
        expect(newList.taskList.length).toBe(1);
        newList.add("New Task");
        newList.add("New Task");
        expect(newList.taskList.length).toBe(3);
    }),
    test("Remove item", ()=> {
        newList.remove(3);
        expect(newList.taskList.length).toBe(2);
        newList.remove(1);
        newList.remove(1);
        expect(newList.taskList.length).toBe(0);
    })

})