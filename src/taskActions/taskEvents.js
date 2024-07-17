import { detailViewModal } from "../modal/taskDetailModal.js";
import { popupWindow, AddCategtoryTitleOnModal } from "../modal/modal.js";
import { getClassName } from "../Utils/domUtil.js";
import { tabModule } from "../app.js";
export const taskHandlers = (() => {
  const taskActions = (button) => {
    const eventTarget =
      button.target.parentNode.parentNode.parentNode.parentNode.parentNode;

    const editEventListener = (task) => {
      if (eventTarget.classList.contains("grid")) {
        const mainSection = document.querySelector(".main-section");
        console.log("edit Button Clicked");
        document.querySelector(
          ".modal > h2"
        ).textContent = `Update Task For ${AddCategtoryTitleOnModal(
          getClassName(mainSection, 1)
        )}`;
        popupWindow.open([
          task,
          Number(eventTarget.getAttribute("data-Index")),
        ]);
      }
    };

    const viewEventListener = (task, containerName) => {
      if (eventTarget.classList.contains("grid")) {
        console.log("Detail Button Clicked");
        detailViewModal.open(task, containerName);
      }
    };

    const deleteEventListener = () => {
      if (eventTarget.classList.contains("grid")) {
        console.log("Delete Button Clicked");
        tabModule.deleteTaskInTab(
          Number(eventTarget.getAttribute("data-Index"))
        );
        //  console.log(eventTarget.getAttribute("data-Index"));
      }
    };

    return { editEventListener, viewEventListener, deleteEventListener };
  };

  const checkBoxEventListener = (button, task) => {
    console.log(button.target.parentNode.parentNode.parentNode);
    console.log(
      button.target.parentNode.parentNode.parentNode.getAttribute("data-index")
    );
    console.log(
      button.target.parentNode.parentNode.parentNode.getAttribute(
        "data-project"
      )
    );
    if (button.target.checked) {
      task.completedStatus = true;
      console.log("Checkbox is checked..");
    } else {
      console.log("Checkbox is not checked..");
      task.completedStatus = false;
    }
  };

  const updateCheckboxStatus = (task, checkBox) => {
    if (task.completedStatus) {
      checkBox.checked = true;
    } else {
      checkBox.checked = false;
    }
  };

  return {
    taskActions,
    checkBoxEventListener,
    updateCheckboxStatus,
  };
})();
