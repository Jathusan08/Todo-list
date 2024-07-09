export const taskHandlers = (() => {
  const editEventListener = () => {};

  const viewEventListener = () => {};

  const deleteEventListener = () => {};

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
    editEventListener,
    viewEventListener,
    deleteEventListener,
    checkBoxEventListener,
    updateCheckboxStatus,
  };
})();
