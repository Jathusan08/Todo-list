import {
  generateContainer,
  addTaskToGridLayout,
  updateTaskToGridLayout,
  removeGrid,
} from "../Utils/tabUtil.js";

// Define a module factory function
export const createModule = (containerName, data) => {
  const tasks = data;

  const loadContainer = () => {
    generateContainer(containerName);
    if (tasks.length != 0) {
      tasks.forEach((task, index) => {
        addTaskToGridLayout(task, index);
      });
    }
    printTasks();
  };

  const addTask = (newTask) => {
    tasks.push(newTask);
    addTaskToGridLayout(newTask, tasks.length - 1);
  };

  const updateTask = (task, index) => {
    tasks[index].title = task.title;
    tasks[index].description = task.description;
    tasks[index].dueDate = task.dueDate;
    tasks[index].priority = task.priority;
    tasks[index].note = task.note;
    updateTaskToGridLayout(task, index);
    //addTaskToGridLayout(newTask, tasks.length - 1);
  };

  const deleteTask = (index) => {
    tasks.splice(index, 1);
    removeGrid(index);
  };

  const printTasks = () => {
    // tasks.forEach((task, index) => {
    //   console.log(`${index}${task.title}, ${task.completedStatus}`);
    // });
    console.log([tasks]);
  };

  const getData = () => tasks;

  return { loadContainer, addTask, getData, updateTask, deleteTask };
};
