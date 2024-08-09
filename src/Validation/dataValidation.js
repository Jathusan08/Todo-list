const { isValid } = require("date-fns");

export const userInputTextValidation = (
  inputType,
  errorLabel,
  errorMessage
) => {
  if (inputType.value === "" || inputType.value.trim() === "") {
    errorLabel.textContent = errorMessage;
    errorLabel.style.color = "#ff2c56";
    return false;
  } else {
    errorLabel.textContent = "✓";
    errorLabel.style.color = "green";
    return true;
  }
};

export const isDateExist = (inputType, errorLabel, errorMessage) => {
  let dateParts = inputType.value.split("-");

  // Extract individual components
  let year = parseInt(dateParts[0]); // Convert to integer
  let month = parseInt(dateParts[1]);
  let day = parseInt(dateParts[2]);

  //console.log(`${year}, ${month}, ${day}`);

  if (isValid(year, month, day) && year <= 9999) {
    errorLabel.textContent = "✓";
    errorLabel.style.color = "green";
    return true;
  } else {
    errorLabel.textContent = errorMessage;
    errorLabel.style.color = "#ff2c56";
    return false;
  }
};
