export const setPriority = (element, priority) => {
  // Remove existing priority classes

  element.classList.remove("highPrioirity", "mediumPrioirity", "lowPrioirity");

  // Add new priority class based on the priority value
  switch (priority) {
    case "High":
      element.classList.add("highPrioirity");
      break;
    case "Medium":
      element.classList.add("mediumPrioirity");
      break;
    case "Low":
      element.classList.add("lowPrioirity");
      break;
    default:
      console.error("Unknown priority level:", priority);
  }
};
