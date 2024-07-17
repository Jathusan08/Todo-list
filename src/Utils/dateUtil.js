import { parse, format } from "date-fns";

// Function to handle and format the date

export const handleDate = (userInput) => {
  // Parse the input date string to a Date object
  // Assuming user input format is 'yyyy-MM-dd'
  let parsedDate = parse(userInput, "yyyy-MM-dd", new Date());

  // Format the date to 'dd-MM-yyyy'
  let formattedDate = format(parsedDate, "dd-MM-yyyy");

  return formattedDate;
};
