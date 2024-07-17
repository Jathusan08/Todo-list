import { selectOptionByValue } from "../Utils/formHelper.js";
import { TodoItem } from "../Class/todoItems.js";
import {
  userInputTextValidation,
  isDateExist,
} from "../Validation/dataValidation.js";

import { tabModule } from "../app.js";

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".cancel-button");
const submitButton = document.querySelector(".submit-button");

// user input fields
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const dueDateInput = document.getElementById("dueDate");
const prioritySelection = document.getElementById("priority");
const noteInput = document.getElementById("note");

// Error labels
const titleError = document.querySelector(".title > .error");
const descriptionError = document.querySelector(".description > .error");
const dueDateError = document.querySelector(".dueDate > .error");

export const popupWindow = (() => {
  // -1 to add new task or more than -1 to update task
  let taskIndex = -1;

  const open = (data) => {
    console.log("Modal Open");

    if (data === null && taskIndex === -1) {
      // when user clicks on add task button so no need to populate the text fields
      clearModalValues();
    } else if (data != null) {
      console.log("data exist");
      titleInput.value = data[0].title;
      descriptionInput.value = data[0].description;
      dueDateInput.value = data[0].dueDate;
      prioritySelection.value = data[0].priority;
      noteInput.value = data[0].note;
      taskIndex = data[1];
    }

    modal.showModal();
  };

  const close = () => {
    modal.close();
    clearModalValues();
    taskIndex = -1;
  };

  const cancel = () => {
    closeButton.addEventListener("click", () => {
      console.log("close btn activated");
      close();
    });
  };

  const submit = () => {
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
        const task = new TodoItem(
          titleInput.value,
          descriptionInput.value,
          dueDateInput.value
        );
        task.priority = prioritySelection.value;
        task.note = noteInput.value;
        console.log(dueDateInput.value);
        console.log(typeof dueDateInput);
        if (taskIndex === -1) {
          // add new task
          tabModule.placeTaskInTab(task);
        } else if (taskIndex > -1) {
          // update existing task
          tabModule.updateTaskInTab(task, taskIndex);
        }

        close();
      } else {
      }
    });
  };

  const titleInputEventListener = () => {
    titleInput.addEventListener("input", () => {
      userInputTextValidation(titleInput, titleError, " Title required");
    });
  };

  const descriptionInputEventListener = () => {
    descriptionInput.addEventListener("input", () => {
      userInputTextValidation(
        descriptionInput,
        descriptionError,
        " Description required"
      );
    });
  };

  const dueDateInputEvenetListener = () => {
    dueDateInput.addEventListener("input", () => {
      isDateExist(dueDateInput, dueDateError, "Invalid date");
    });
  };

  return {
    open,
    close,
    cancel,
    submit,
    titleInputEventListener,
    descriptionInputEventListener,
    dueDateInputEvenetListener,
  };
})();

export const AddCategtoryTitleOnModal = (containerName) => {
  if (containerName === "todayContainer") {
    return "Today";
  } else if (containerName === "weeklyContainer") {
    return "Weekly";
  } else if (containerName === "anyDayContainer") {
    return "Anyday";
  } else if (containerName === "personalContainer") {
    return "Personal";
  } else if (containerName === "homeContainer") {
    return "Home";
  } else if (containerName === "learningContainer") {
    return "Learning";
  } else if (containerName === "healthContainer") {
    return "Health";
  } else if (containerName === "workContainer") {
    return "Work";
  } else if (containerName === "eventContainer") {
    return "Event";
  } else if (containerName === "projectManagementContainer") {
    return "Project Management";
  } else if (containerName === "shoppingContainer") {
    return "Shopping";
  } else if (containerName === "financeContainer") {
    return "Finance";
  } else if (containerName === "socialContainer") {
    return "Social";
  } else if (containerName === "travelContainer") {
    return "Travel";
  }
};

export const clearModalValues = () => {
  titleInput.value = "";
  descriptionInput.value = "";
  noteInput.value = "";
  dueDateInput.value = "";
  selectOptionByValue(prioritySelection, "Low");
  titleError.textContent = "";
  descriptionError.textContent = "";
  dueDateError.textContent = "";
};
