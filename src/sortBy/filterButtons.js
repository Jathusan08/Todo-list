import { tabModule } from "../app.js";

const completeTasksBtn = document.querySelector(".completeTasks-btn");
const incompleteTasksBtn = document.querySelector(".incompletTasks-btn");
const highPriorityTasksBtn = document.querySelector(".highPriorityTasks-btn");
const lowPriorityTasksBtn = document.querySelector(".lowPriorityTasks-btn");
const mediumPriorityTasksBtn = document.querySelector(
  ".mediumPriorityTasks-btn"
);
const insertionOrderBtn = document.querySelector(".insertionOrder-btn");
const titleAsecBtn = document.querySelector(".titleASEC-btn");
const titleDescBtn = document.querySelector(".titleDESC-btn");
const dateAscBtn = document.querySelector(".dateASEC-btn");
const dateDescBtn = document.querySelector(".dateDESC-btn");

export const filterModule = (() => {
  const insertionOrderEventListener = () => {
    insertionOrderBtn.addEventListener("click", () => {
      tabModule.filterInsertionOrderInTab();
    });
  };

  const completeTasksEventListener = () => {
    completeTasksBtn.addEventListener("click", () => {
      tabModule.filterCompletionTaskStatusInTab(true);
    });
  };
  const incompleteTasksEventListener = () => {
    incompleteTasksBtn.addEventListener("click", () => {
      tabModule.filterCompletionTaskStatusInTab(false);
    });
  };

  const highPriorityTasksEventListener = () => {
    highPriorityTasksBtn.addEventListener("click", () => {
      tabModule.filterPriorityInTab("High");
    });
  };

  const lowPriorityTasksEventListener = () => {
    lowPriorityTasksBtn.addEventListener("click", () => {
      tabModule.filterPriorityInTab("Low");
    });
  };

  const mediumPriorityTasksEventListener = () => {
    mediumPriorityTasksBtn.addEventListener("click", () => {
      tabModule.filterPriorityInTab("Medium");
    });
  };

  const titleAsecEventListener = () => {
    titleAsecBtn.addEventListener("click", () => {
      tabModule.filterTaskTitleInTab("ASEC");
    });
  };

  const titleDescEventListener = () => {
    titleDescBtn.addEventListener("click", () => {
      tabModule.filterTaskTitleInTab("DESC");
    });
  };

  const dateAsecEventListener = () => {
    dateAscBtn.addEventListener("click", () => {
      tabModule.filterTaskDateInTab("ASEC");
    });
  };

  const dateDescEventListener = () => {
    dateDescBtn.addEventListener("click", () => {
      tabModule.filterTaskDateInTab("DESC");
    });
  };

  return {
    insertionOrderEventListener,
    completeTasksEventListener,
    incompleteTasksEventListener,
    highPriorityTasksEventListener,
    lowPriorityTasksEventListener,
    mediumPriorityTasksEventListener,
    titleAsecEventListener,
    titleDescEventListener,
    dateAsecEventListener,
    dateDescEventListener,
  };
})();
