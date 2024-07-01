export const selectOptionByValue = (selectionId, selection) => {
  const prioritySelection = selectionId;

  // Set the value you want to select
  const selectedValue = selection; // Example value to be selected

  // Loop through options to find the one with the matching value
  for (let i = 0; i < prioritySelection.options.length; i++) {
    if (prioritySelection.options[i].value === selectedValue) {
      // Set the selected attribute of the matching option
      prioritySelection.options[i].selected = true;
      break; // Exit the loop once we've found and selected the option
    }
  }
};
