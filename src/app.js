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

  return {
    clickTabBtns,
    loadTodayTab,
    placeTaskInTab,
  };
})();

popupWindow.titleInputEventListener(); // titleInput on modal

popupWindow.descriptionInputEventListener(); // descriptionInput on modal

popupWindow.dueDateInputEvenetListener(); // // dueDateInput on modal

addTaskBtn.addEventListener("click", () => {
  popupWindow.open();
  document.querySelector(".modal > h2 > span").textContent =
    AddCategtoryTitleOnModal(getClassName(mainSection, 1));
});

popupWindow.submit(); // when user clicks on submit button on Modal when adding or editing task

(() => {
  // loading the default page when user launch app which is today
  tabModule.loadTodayTab();
})();

tabModule.clickTabBtns(); // all predfefined category buttons event listener

popupWindow.cancel(); // modal cancel button action event listener
