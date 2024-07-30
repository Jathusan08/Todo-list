import {
  generateContainer,
  addTaskToGridLayout,
  updateTaskToGridLayout,
  removeGrid,
  removeTaskGrids,
} from "../Utils/tabUtil.js";

import {
  priorityMatchPattern,
  titleMatchPattern,
} from "../searchBar/searchPattern.js";

import { searchModule } from "../searchBar/ searchBar.js";

import { toggleElementVisibility } from "./domUtil.js";

// Define a module factory function
export const createModule = (containerName, data) => {
  const tasks = data;

  const loadContainer = () => {
    generateContainer(containerName);
    toggleElementVisibility(".addTask-btn", "block"); // showing the add button for Categories only
    toggleElementVisibility(".dateASEC-btn", "block");
    toggleElementVisibility(".dateDESC-btn", "block");
    searchModule.clearSearchBar();
    loadData();
    printTasks();
  };

  const loadData = () => {
    if (tasks.length != 0) {
      tasks.forEach((task, index) => {
        addTaskToGridLayout(task, index);
      });
    }
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

  const searchTask = (task) => {
    removeTaskGrids();

    const customPattern = task; // Set your custom pattern here
    const matchPattern = new RegExp(customPattern, "i"); //giving pattern that we want to match

    tasks.forEach((task, index) => {
      if (
        priorityMatchPattern(matchPattern, task) ||
        titleMatchPattern(matchPattern, task)
      ) {
        console.log(task, index);
        addTaskToGridLayout(task, index);
      }
    });
  };

  const sortByCompletionTaskStatus = (completionStatus) => {
    removeTaskGrids();

    tasks.forEach((task, index) => {
      if (completionStatus) {
        if (task.completedStatus === true) {
          addTaskToGridLayout(task, index);
        }
      } else if (!completionStatus) {
        if (task.completedStatus === false) {
          addTaskToGridLayout(task, index);
        }
      }
    });
  };

  const sortByPriority = (taskPriority) => {
    removeTaskGrids();
    tasks.forEach((task, index) => {
      if (taskPriority === "High") {
        if (task.priority === "High") {
          addTaskToGridLayout(task, index);
        }
      } else if (taskPriority === "Low") {
        if (task.priority === "Low") {
          addTaskToGridLayout(task, index);
        }
      } else if (taskPriority === "Medium") {
        if (task.priority === "Medium") {
          addTaskToGridLayout(task, index);
        }
      }
    });
  };

  const sortByTitleTask = (sortedOrder) => {
    removeTaskGrids();

    const copyData = [];

    tasks.forEach((task, index) => {
      copyData.push({ orginalIndex: index, data: task });
    });

    copyData.sort((task1, task2) => {
      // If both elements are numbers or both are strings, perform normal comparison
      if (
        (typeof task1.data.title === "number" &&
          typeof task2.data.title === "number") ||
        (typeof task1.data.title === "string" &&
          typeof task2.data.title === "string")
      ) {
        return task1.data.title < task2.data.title
          ? -1
          : task1.data.title > task2.data.title
          ? 1
          : 0;
      }
      // If a is a number and b is a string, prioritise a (numbers before strings)
      if (
        typeof task1.data.title === "number" &&
        typeof task2.data.title === "string"
      ) {
        return -1;
      }
      // If a is a string and b is a number, prioritise b (numbers before strings)
      if (
        typeof task1.data.title === "string" &&
        typeof task2.data.title === "number"
      ) {
        return 1;
      }
    });

    if (sortedOrder === "ASEC") {
      copyData.forEach((task) =>
        addTaskToGridLayout(task.data, task.orginalIndex)
      );
    } else if (sortedOrder === "DESC") {
      copyData.reverse();
      copyData.forEach((task) =>
        addTaskToGridLayout(task.data, task.orginalIndex)
      );
    }
  };

  const sortByDate = (sortedOrder) => {
    removeTaskGrids();

    const copyData = [];

    tasks.forEach((task, index) => {
      copyData.push({ orginalIndex: index, data: task });
    });

    copyData.sort(
      (task1, task2) =>
        new Date(task1.data.dueDate) - new Date(task2.data.dueDate)
    );

    if (sortedOrder === "ASEC") {
      copyData.forEach((task) =>
        addTaskToGridLayout(task.data, task.orginalIndex)
      );
    } else if (sortedOrder === "DESC") {
      copyData.reverse();
      copyData.forEach((task) =>
        addTaskToGridLayout(task.data, task.orginalIndex)
      );
    }
  };

  const sortByInsertionOrder = () => {
    removeTaskGrids();

    tasks.forEach((task, index) => {
      addTaskToGridLayout(task, index);
    });
  };

  const getData = () => {
    const data = tasks;
    return data;
  };

  return {
    loadContainer,
    addTask,
    getData,
    updateTask,
    deleteTask,
    searchTask,
    loadData,
    sortByCompletionTaskStatus,
    sortByPriority,
    sortByTitleTask,
    sortByInsertionOrder,
    sortByDate,
  };
};
