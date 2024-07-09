import { generateContainer, addTaskToGridLayout } from "../Utils/tabUtil.js";

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

  const printTasks = () => {
    tasks.forEach((task) => {
      console.log(`${task.title}, ${task.completedStatus}`);
    });
  };

  const getData = () => tasks;

  return { loadContainer, addTask, getData };
};
