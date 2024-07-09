import { addNewElement } from "./domUtil.js";
import { setPriority } from "./priorityDom.js";
import { taskHandlers } from "../taskActions/taskEvents.js";
const { format } = require("date-fns");

export const generateContainer = (containerName) => {
  const mainSection = document.querySelector(".main-section");

  const newContainer = addNewElement("div", containerName);
  newContainer.classList.add(containerName);

  mainSection.appendChild(newContainer);

  const headerContainer = addNewElement("div", "tab-title");
  headerContainer.textContent =
    containerName.charAt(0).toUpperCase() +
    containerName
      .replace("Container", "")
      .substring(1)
      .split(/(?=[A-Z])/)
      .join(" ");

  newContainer.appendChild(headerContainer);

  const newLayout = addNewElement(
    "div",
    `${containerName.replace("Container", "")}-viewLayout`
  );

  newContainer.appendChild(newLayout);
};

export const addTaskToGridLayout = (task, index) => {
  const viewLayout = document.querySelector(
    ".main-section > div:nth-child(2) > div:nth-child(2)"
  );

  const mainContainer = document.querySelector(
    ".main-section > div:nth-child(2)"
  );

  const grid = addNewElement("div", "grid");

  grid.setAttribute("data-Index", `${index}`);
  grid.setAttribute(
    "data-project",
    `${mainContainer.className.replace("Container", "")}`
  );

  viewLayout.appendChild(grid);

  const gridLayout = addNewElement("div", "gridLayout");

  grid.appendChild(gridLayout);

  const checkBoxLayout = addNewElement("div", "checkBoxLayout");

  gridLayout.appendChild(checkBoxLayout);

  const checkBox = addNewElement("input", "checkbox");
  checkBox.type = "checkbox";

  taskHandlers.updateCheckboxStatus(task, checkBox);

  checkBox.addEventListener("change", (checkBoxBtn) => {
    taskHandlers.checkBoxEventListener(checkBoxBtn, task);
  });

  checkBoxLayout.appendChild(checkBox);

  const taskInfoLayout = addNewElement("div", "taskInfoLayout");

  gridLayout.appendChild(taskInfoLayout);

  const taskTitle = addNewElement("div", "taskTitle");
  taskTitle.textContent = task.title;

  taskInfoLayout.appendChild(taskTitle);

  const taskPriority = addNewElement("div", "taskPriority");
  taskPriority.textContent = task.priority;
  setPriority(taskPriority, task.priority);

  taskInfoLayout.appendChild(taskPriority);

  const taskdueDate = addNewElement("div", "taskdueDate");
  const date = new Date(task.dueDate);
  taskdueDate.textContent = `${format(date, "dd-MM-yyyy")}`;
  taskInfoLayout.appendChild(taskdueDate);

  const buttonLayout = addNewElement("div", "buttonLayout");
  taskInfoLayout.appendChild(buttonLayout);

  const detailBtn = addNewElement("button", "detail-btn");
  detailBtn.addEventListener("click", (btn) => {
    console.log(
      btn.target.parentNode.parentNode.parentNode.parentNode.parentNode
    );
    console.log("Detail Button Clicked");
  });
  const detailBtnImg = addNewElement("div", "btn-img");
  detailBtn.appendChild(detailBtnImg);
  buttonLayout.appendChild(detailBtn);

  const editBtn = addNewElement("button", "edit-btn");
  editBtn.addEventListener("click", (btn) => {
    console.log(
      btn.target.parentNode.parentNode.parentNode.parentNode.parentNode
    );
    console.log("edit Button Clicked");
  });

  const editBtnImg = addNewElement("div", "btn-img");
  editBtn.appendChild(editBtnImg);
  buttonLayout.appendChild(editBtn);

  const deleteBtn = addNewElement("button", "delete-btn");
  deleteBtn.addEventListener("click", (btn) => {
    console.log(
      btn.target.parentNode.parentNode.parentNode.parentNode.parentNode
    );
    console.log("Delete Button Clicked");
  });
  buttonLayout.appendChild(deleteBtn);
  const deleteBtnImg = addNewElement("div", "btn-img");
  deleteBtn.appendChild(deleteBtnImg);
  buttonLayout.appendChild(deleteBtn);
};
