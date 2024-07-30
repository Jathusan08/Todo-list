import "./style.css";

import {
  todayModule,
  weeklyModule,
  anydayModule,
} from "./Categories/timeFrameCategories.js";

import {
  personalModule,
  travelModule,
  socialModule,
  financeModule,
  shoppingModule,
  projectManagementModule,
  eventModule,
  workModule,
  healthModule,
  learningModule,
  homeModule,
} from "./Categories/predefinedCategories.js";

import { getClassName, removeContent } from "./Utils/domUtil.js";

import { AddCategtoryTitleOnModal, popupWindow } from "./modal/modal.js";

import { detailViewModal } from "./modal/taskDetailModal.js";

import { searchModule } from "./searchBar/ searchBar.js";

import { filterModule } from "./sortBy/filterButtons.js";

const mainSection = document.querySelector(".main-section");

const addTaskBtn = document.querySelector(".addTask-btn");

export const tabModule = (() => {
  let seletctedTab = 0; // default to today

  const tabs = [
    {
      tabButton: document.querySelector(".today-btn"),
      tabModule: todayModule,
    },
    {
      tabButton: document.querySelector(".weekly-btn"),
      tabModule: weeklyModule,
    },
    {
      tabButton: document.querySelector(".anyDay-btn"),
      tabModule: anydayModule,
    },
    {
      tabButton: document.querySelector(".personal-btn"),
      tabModule: personalModule,
    },
    {
      tabButton: document.querySelector(".home-btn"),
      tabModule: homeModule,
    },
    {
      tabButton: document.querySelector(".learning-btn"),
      tabModule: learningModule,
    },
    {
      tabButton: document.querySelector(".health-btn"),
      tabModule: healthModule,
    },
    {
      tabButton: document.querySelector(".work-btn"),
      tabModule: workModule,
    },
    {
      tabButton: document.querySelector(".event-btn"),
      tabModule: eventModule,
    },
    {
      tabButton: document.querySelector(".projectManagement-btn"),
      tabModule: projectManagementModule,
    },
    {
      tabButton: document.querySelector(".shopping-btn"),
      tabModule: shoppingModule,
    },
    {
      tabButton: document.querySelector(".finance-btn"),
      tabModule: financeModule,
    },
    {
      tabButton: document.querySelector(".social-btn"),
      tabModule: socialModule,
    },
    {
      tabButton: document.querySelector(".travel-btn"),
      tabModule: travelModule,
    },
  ];

  const loadTodayTab = () => {
    return tabs[0].tabModule.loadContainer();
  };

  const placeTaskInTab = (newTask) => {
    tabs[seletctedTab].tabModule.addTask(newTask);
  };

  const clickTabBtns = () => {
    tabs.forEach((tab, index) => {
      tab.tabButton.addEventListener("click", () => {
        seletctedTab = index;

        if (
          tab.tabButton.className.split("-")[0] !=
          getClassName(mainSection, 1).replace("Container", "")
        ) {
          removeContent(mainSection, 1);
          tab.tabModule.loadContainer();
        }
      });
    });
  };

  const updateTaskInTab = (task, taskIndex) => {
    tabs[seletctedTab].tabModule.updateTask(task, taskIndex);
  };

  const loadTaskDataInTab = () => {
    tabs[seletctedTab].tabModule.loadData();
  };

  const deleteTaskInTab = (taskIndex) => {
    tabs[seletctedTab].tabModule.deleteTask(taskIndex);
  };

  const searchTaskInTab = (task) => {
    tabs[seletctedTab].tabModule.searchTask(task);
  };

  const filterCompletionTaskStatusInTab = (completionStatus) => {
    tabs[seletctedTab].tabModule.sortByCompletionTaskStatus(completionStatus);
  };

  const filterPriorityInTab = (taskPriority) => {
    tabs[seletctedTab].tabModule.sortByPriority(taskPriority);
  };

  const filterTaskTitleInTab = (sortOrder) => {
    tabs[seletctedTab].tabModule.sortByTitleTask(sortOrder);
  };

  const filterTaskDateInTab = (sortOrder) => {
    tabs[seletctedTab].tabModule.sortByDate(sortOrder);
  };

  const filterInsertionOrderInTab = () => {
    tabs[seletctedTab].tabModule.sortByInsertionOrder();
  };

  return {
    clickTabBtns,
    loadTodayTab,
    placeTaskInTab,
    updateTaskInTab,
    deleteTaskInTab,
    searchTaskInTab,
    loadTaskDataInTab,
    filterCompletionTaskStatusInTab,
    filterPriorityInTab,
    filterTaskTitleInTab,
    filterTaskDateInTab,
    filterInsertionOrderInTab,
  };
})();

popupWindow.titleInputEventListener(); // titleInput on modal

popupWindow.descriptionInputEventListener(); // descriptionInput on modal

popupWindow.dueDateInputEvenetListener(); // // dueDateInput on modal

addTaskBtn.addEventListener("click", () => {
  popupWindow.open(null); // new data enter rather than updating existinf data
  document.querySelector(
    ".modal > h2"
  ).textContent = `New Task For ${AddCategtoryTitleOnModal(
    getClassName(mainSection, 1)
  )}`;
  // document.querySelector(".modal > h2 > span").textContent =
  //   AddCategtoryTitleOnModal(getClassName(mainSection, 1));
});

popupWindow.submit(); // when user clicks on submit button on Modal when adding or editing task

(() => {
  tabModule.loadTodayTab(); // loading the default page when user launch app which is today
})();

tabModule.clickTabBtns(); // all predfefined category buttons event listener

popupWindow.cancel(); // modal cancel button action event listener

detailViewModal.close(); // when user vist detail view modal and click outside it will close by iteself

searchModule.performSearch(); // when user click on the search bar this code triggers

filterModule.insertionOrderEventListener();

filterModule.completeTasksEventListener(); //when user clicks on the filter option - complete Task

filterModule.incompleteTasksEventListener(); //when user clicks on the filter option - incomplete Task

filterModule.highPriorityTasksEventListener(); //when user clicks on the filter option - High priority Task

filterModule.lowPriorityTasksEventListener(); //when user clicks on the filter option - low priority Task

filterModule.mediumPriorityTasksEventListener(); //when user clicks on the filter option - medium priority Task

filterModule.titleAsecEventListener();

filterModule.titleDescEventListener();

filterModule.dateAsecEventListener();

filterModule.dateDescEventListener();
