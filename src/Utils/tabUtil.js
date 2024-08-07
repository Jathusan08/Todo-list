import { addNewElement } from "./domUtil.js";
import { setPriority } from "./priorityDom.js";
import { taskHandlers } from "../taskActions/taskEvents.js";
import { handleDate } from "./dateUtil.js";

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

export const displayTasktoGridLayout = (task, projectName) => {
  const viewLayout = document.querySelector(
    ".main-section > div:nth-child(2) > div:nth-child(2)"
  );

  const grid = addNewElement("div", "grid");

  grid.setAttribute("data-project", `${projectName}`);
  viewLayout.appendChild(grid);

  const gridLayout = addNewElement("div", "gridLayout");

  grid.appendChild(gridLayout);

  const checkBoxLayout = addNewElement("div", "checkBoxLayout");

  gridLayout.appendChild(checkBoxLayout);

  const checkBox = addNewElement("input", "checkbox");
  checkBox.type = "checkbox";

  taskHandlers.updateCheckboxStatus(task, checkBox);
  checkBox.disabled = true;
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

  taskdueDate.textContent = handleDate(task.dueDate);
  taskInfoLayout.appendChild(taskdueDate);

  const buttonLayout = addNewElement("div", "buttonLayout");
  taskInfoLayout.appendChild(buttonLayout);

  const detailBtn = addNewElement("button", "detail-btn");
  detailBtn.addEventListener("click", (btn) => {
    taskHandlers.taskActions(btn).viewEventListener(task, projectName);
  });
  const detailBtnImg = addNewElement("div", "btn-img");
  detailBtn.appendChild(detailBtnImg);
  buttonLayout.appendChild(detailBtn);
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
    // console.log({ task });
    let getStatus = taskHandlers.checkBoxEventListener(checkBoxBtn, task);

    let tabName =
      `${mainContainer.className}`.charAt(0).toUpperCase() +
      `${mainContainer.className}`
        .replace("Container", "")
        .substring(1)
        .split(/(?=[A-Z])/)
        .join(" ");
    let storageData = JSON.parse(localStorage.getItem(`${tabName}-data`));
    storageData[index]._completedStatus = getStatus;
    localStorage.setItem(`${tabName}-data`, JSON.stringify(storageData));
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

  taskdueDate.textContent = handleDate(task.dueDate);
  taskInfoLayout.appendChild(taskdueDate);

  const buttonLayout = addNewElement("div", "buttonLayout");
  taskInfoLayout.appendChild(buttonLayout);

  const detailBtn = addNewElement("button", "detail-btn");
  detailBtn.addEventListener("click", (btn) => {
    taskHandlers
      .taskActions(btn)
      .viewEventListener(
        task,
        `${mainContainer.className.replace("Container", "")}`
      );
  });
  const detailBtnImg = addNewElement("div", "btn-img");
  detailBtn.appendChild(detailBtnImg);
  buttonLayout.appendChild(detailBtn);

  const editBtn = addNewElement("button", "edit-btn");
  editBtn.addEventListener("click", (btn) => {
    taskHandlers.taskActions(btn).editEventListener(task);
  });

  const editBtnImg = addNewElement("div", "btn-img");
  editBtn.appendChild(editBtnImg);
  buttonLayout.appendChild(editBtn);

  const deleteBtn = addNewElement("button", "delete-btn");
  deleteBtn.addEventListener("click", (btn) => {
    taskHandlers.taskActions(btn).deleteEventListener();
  });
  buttonLayout.appendChild(deleteBtn);
  const deleteBtnImg = addNewElement("div", "btn-img");
  deleteBtn.appendChild(deleteBtnImg);
  buttonLayout.appendChild(deleteBtn);
};

export const updateTaskToGridLayout = (task, index) => {
  const gridIndex = getGridIndex(String(index));
  const updateGrid = document.querySelector(
    `.main-section > div:nth-child(2) > div:nth-child(2) > div[class~="grid"]:nth-child(${
      Number(gridIndex) + 1
    })`
  );

  updateGrid.childNodes[0].childNodes[1].childNodes[0].textContent = task.title; // update title
  updateGrid.childNodes[0].childNodes[1].childNodes[1].textContent =
    task.priority; // update priority
  setPriority(
    updateGrid.childNodes[0].childNodes[1].childNodes[1],
    task.priority
  );

  updateGrid.childNodes[0].childNodes[1].childNodes[2].textContent = handleDate(
    task.dueDate
  ); // upddate due date;
};

export const removeGrid = (index) => {
  const gridIndex = getGridIndex(String(index));
  const deleteGrid = document.querySelector(
    `.main-section > div:nth-child(2) > div:nth-child(2) > div[class~="grid"]:nth-child(${
      Number(gridIndex) + 1
    })`
  );

  deleteGrid.remove();
  updateAllGridIndex();
};

const updateAllGridIndex = () => {
  const allGrid = document.querySelectorAll(
    `.main-section > div:nth-child(2) > div:nth-child(2) > div[class~="grid"]`
  );
  allGrid.forEach((grid, index) => {
    grid.setAttribute("data-index", index);
  });
};

export const removeTaskGrids = () => {
  const viewLayout = document.querySelector(
    `.main-section > div:nth-child(2) > div:nth-child(2)`
  );

  //console.log(viewLayout);

  while (viewLayout.hasChildNodes()) {
    viewLayout.removeChild(viewLayout.firstChild);
  }
};

export const updateCheckBoxStorage = (storageName, data) => {};

export const checkIfGridTaskExist = () => {
  const viewLayout = document.querySelector(
    `.main-section > div:nth-child(2) > div:nth-child(2)`
  );
  return viewLayout.hasChildNodes();
};

const getGridIndex = (indexNum) => {
  let gridIndex = -1;

  const allGrid = document.querySelectorAll(
    `.main-section > div:nth-child(2) > div:nth-child(2) > div[class~="grid"]`
  );

  allGrid.forEach((grid, index) => {
    if (grid.getAttribute("data-Index") === indexNum) {
      gridIndex = index;
      //console.log(`match ${index}`);
    }
  });

  return gridIndex;
};
