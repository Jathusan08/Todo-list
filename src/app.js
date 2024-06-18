import "./style.css";

import { createTodayContainer } from "./TimeFrame/today.js";
import { createWeeklyContainer } from "./TimeFrame/weekly.js";
import { createAnydayContainer } from "./TimeFrame/anyday.js";

import { createPersonalContainer } from "./Categories/personal.js";
import { createHomeContainer } from "./Categories/home.js";
import { createLearningContainer } from "./Categories/learning.js";
import { createHealthContainer } from "./Categories/health.js";
import { createWorkContainer } from "./Categories/work.js";
import { createEventContainer } from "./Categories/event.js";
import { createProjectManagementContainer } from "./Categories/projectManagement.js";
import { createShoppingContainer } from "./Categories/shopping.js";
import { createFinanceContainer } from "./Categories/finance.js";
import { createSocialContainer } from "./Categories/social.js";
import { createTravelContainer } from "./Categories/travel.js";

import { getClassName, removeContent, hideElement } from "./Utils/domUtil.js";

import {
  userInputTextValidation,
  isDateExist,
} from "./Validation/dataValidation.js";

const todayBtn = document.querySelector(".today-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const anydayBtn = document.querySelector(".anyday-btn");
const personalBtn = document.querySelector(".personal-btn");
const homeBtn = document.querySelector(".home-btn");
const learningBtn = document.querySelector(".learning-btn");
const healthBtn = document.querySelector(".health-btn");
const workBtn = document.querySelector(".work-btn");
const eventBtn = document.querySelector(".event-btn");
const projectManagementBtn = document.querySelector(".projectManagement-btn");
const shoppingBtn = document.querySelector(".shopping-btn");
const financeBtn = document.querySelector(".finance-btn");
const socialBtn = document.querySelector(".social-btn");
const travelBtn = document.querySelector(".travel-btn");

const mainSection = document.querySelector(".main-section");

//  Modal
const modal = document.querySelector(".modal");
const addTaskBtn = document.querySelector(".addTask-btn");
const closeButton = document.querySelector(".cancel-button");
const submitButton = document.querySelector(".submit-button");

import { AddCategtoryTitleOnModal } from "./modal/modal.js";

// user input fields
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const dueDate = document.getElementById("dueDate");

// Error labels
const titleError = document.querySelector(".title > .error");
const descriptionError = document.querySelector(".description > .error");
const dueDateError = document.querySelector(".dueDate > .error");

titleInput.addEventListener("input", () => {
  userInputTextValidation(titleInput, titleError, " Title required");
});

descriptionInput.addEventListener("input", () => {
  userInputTextValidation(
    descriptionInput,
    descriptionError,
    " Description required"
  );
});

dueDate.addEventListener("input", () => {
  isDateExist(dueDate, dueDateError, "Invalid date");
});

addTaskBtn.addEventListener("click", () => {
  console.log(getClassName(mainSection, 1));
  modal.showModal();
  document.querySelector(".modal > h2 > span").textContent =
    AddCategtoryTitleOnModal(getClassName(mainSection, 1));
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    userInputTextValidation(titleInput, titleError, " Title required") &&
    userInputTextValidation(
      descriptionInput,
      descriptionError,
      " Description required"
    ) &&
    isDateExist(dueDate, dueDateError, "Invalid date")
  ) {
    modal.close();
  } else {
  }
});

closeButton.addEventListener("click", () => {
  modal.close();
});

(() => {
  // loading the default page when user launch app
  createTodayContainer();
})();

todayBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "todayContainer") {
    removeContent(mainSection, 1); // remove the current layout that is not todayContainer
    createTodayContainer();
  }
});

weeklyBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "weeklyContainer") {
    removeContent(mainSection, 1);
    createWeeklyContainer();
  }
});

anydayBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "anyDayContainer") {
    removeContent(mainSection, 1);
    createAnydayContainer();
  }
});

personalBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "personalContainer") {
    removeContent(mainSection, 1);
    createPersonalContainer();
  }
});

homeBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "homeContainer") {
    removeContent(mainSection, 1);
    createHomeContainer();
  }
});

learningBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "learningContainer") {
    removeContent(mainSection, 1);
    createLearningContainer();
  }
});

healthBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "healthContainer") {
    removeContent(mainSection, 1);
    createHealthContainer();
  }
});

workBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "workContainer") {
    removeContent(mainSection, 1);
    createWorkContainer();
  }
});

eventBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "eventContainer") {
    removeContent(mainSection, 1);
    createEventContainer();
  }
});

projectManagementBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "projectManagementContainer") {
    removeContent(mainSection, 1);
    createProjectManagementContainer();
  }
});

shoppingBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "shoppingContainer") {
    removeContent(mainSection, 1);
    createShoppingContainer();
  }
});

financeBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "financeContainer") {
    removeContent(mainSection, 1);
    createFinanceContainer();
  }
});

socialBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "socialContainer") {
    removeContent(mainSection, 1);
    createSocialContainer();
  }
});

travelBtn.addEventListener("click", () => {
  if (getClassName(mainSection, 1) != "travelContainer") {
    removeContent(mainSection, 1);
    createTravelContainer();
  }
});
