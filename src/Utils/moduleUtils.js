import { generateContainer } from "../Utils/tabUtil.js";

// Define a module factory function
export const createModule = (containerName) => {
  const tasks = [];

  const loadContainer = () => {
    generateContainer(containerName);
    printTasks();
  };

  const addTask = (newTask) => {
    tasks.push(newTask);
  };

  const printTasks = () => {
    console.log(tasks);
  };

  return { loadContainer, addTask };
};
