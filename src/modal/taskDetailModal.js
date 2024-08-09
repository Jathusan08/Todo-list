import { setPriority } from "../Utils/priorityDom.js";
import { format, parseISO } from "date-fns";

const detailModal = document.querySelector(".detailModal");

const title = document.querySelector(
  ".detailContainer  > .taskTitleContainer > .taskTitle"
);
const projectName = document.querySelector(
  ".detailContainer > .taskProjectName"
);
const description = document.querySelector(
  ".detailContainer > .taskDescriptionContainer > textarea"
);
const priority = document.querySelector(
  ".detailContainer > .taskPriorityContainer > div:nth-child(2)"
);
const dueDate = document.querySelector(
  ".detailContainer > .taskDueDateContainer > div:nth-child(2)"
);
const note = document.querySelector(
  ".detailContainer > .taskNoteContainer > textarea"
);

const status = document.querySelector(
  ".detailContainer > .taskStatusContainer > .taskStatus"
);

export const detailViewModal = (() => {
  const open = (task, containerName) => {
    // console.log("Detail Modal Open");
    projectName.textContent =
      containerName.charAt(0).toUpperCase() + containerName.slice(1);
    title.textContent = task.title;
    description.textContent = task.description;
    priority.textContent = task.priority;
    setPriority(priority, task.priority);
    dueDate.textContent = format(parseISO(task.dueDate), "EEEE do MMMM yyyy");
    note.textContent = task.note;

    if (task.completedStatus) {
      status.textContent = "COMPLETE";
      status.style.color = "#35A74E";
    } else {
      status.textContent = "INCOMPLETE";
      status.style.color = "#E76471";
    }

    detailModal.showModal();
  };

  const close = () => {
    window.onclick = function (event) {
      if (event.target == detailModal) {
        detailModal.close();
        clearDetailViewModalValues();
      }
    };

    const clearDetailViewModalValues = () => {
      title.textContent = "";
      projectName.textContent = "";
      description.textContent = "";
      priority.textContent = "";
      dueDate.textContent = "";
      note.textContent = "";
      status.textContent = "";
    };
  };

  return { open, close };
})();
