import "./style.css";

import { todayModule } from "./TimeFrame/today.js";
import { weeklyModule } from "./TimeFrame/weekly.js";
import { anydayModule } from "./TimeFrame/anyday.js";

import { personalModule } from "./Categories/predefined/personal.js";
import { homeModule } from "./Categories/predefined/home.js";
import { learningModule } from "./Categories/predefined/learning.js";
import { healthModule } from "./Categories/predefined/health.js";
import { workModule } from "./Categories/predefined/work.js";
import { eventModule } from "./Categories/predefined/event.js";
import { projectManagementModule } from "./Categories/predefined/projectManagement.js";
import { shoppingModule } from "./Categories/predefined/shopping.js";
import { financeModule } from "./Categories/predefined/finance.js";
import { socialModule } from "./Categories/predefined/social.js";
import { travelModule } from "./Categories/predefined/travel.js";

import { getClassName, removeContent, hideElement } from "./Utils/domUtil.js";

import {
  userInputTextValidation,
  isDateExist,
} from "./Validation/dataValidation.js";

const prefefinedCategoryButton = [
  document.querySelector(".today-btn"),
  document.querySelector(".weekly-btn"),
  document.querySelector(".anyDay-btn"),
  document.querySelector(".personal-btn"),
  document.querySelector(".home-btn"),
  document.querySelector(".learning-btn"),
  document.querySelector(".health-btn"),
  document.querySelector(".work-btn"),
  document.querySelector(".event-btn"),
  document.querySelector(".projectManagement-btn"),
  document.querySelector(".shopping-btn"),
  document.querySelector(".finance-btn"),
  document.querySelector(".social-btn"),
  document.querySelector(".travel-btn"),
];

const categoryContainer = [
  todayModule,
  weeklyModule,
  anydayModule,
  personalModule,
  homeModule,
  learningModule,
  healthModule,
  workModule,
  eventModule,
  projectManagementModule,
  shoppingModule,
  financeModule,
  socialModule,
  travelModule,
];

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
  // loading the default page when user launch app which is today
  categoryContainer[0].loadContainer();
})();

prefefinedCategoryButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (
      button.className.split("-")[0] !=
      getClassName(mainSection, 1).replace("Container", "")
    ) {
      removeContent(mainSection, 1);
      categoryContainer[index].loadContainer();
    }
  });
});
