import { parse, format, isToday, add } from "date-fns";

// Function to handle and format the date

export const handleDate = (userInput) => {
  // Parse the input date string to a Date object
  // Assuming user input format is 'yyyy-MM-dd'
  let parsedDate = parse(userInput, "yyyy-MM-dd", new Date());

  // Format the date to 'dd-MM-yyyy'
  let formattedDate = format(parsedDate, "dd-MM-yyyy");

  return formattedDate;
};

export const isTodayDate = (date) => {
  // Parse the input date string to a Date object, Assuming user input format is 'yyyy-MM-dd'
  let parsedDate = parse(date, "yyyy-MM-dd", new Date());

  return isToday(parsedDate);
};

export const getWeeklyDate = () => {
  // Get the current date
  const today = new Date();

  // Format the date as 'YYYY-MM-DD'
  const formattedDate = format(today, "yyyy-MM-dd");

  return [
    format(
      add(formattedDate, {
        days: 1,
      }),
      "yyyy-MM-dd"
    ),
    format(
      add(formattedDate, {
        days: 2,
      }),
      "yyyy-MM-dd"
    ),
    format(
      add(formattedDate, {
        days: 3,
      }),
      "yyyy-MM-dd"
    ),
    format(
      add(formattedDate, {
        days: 4,
      }),
      "yyyy-MM-dd"
    ),
    format(
      add(formattedDate, {
        days: 5,
      }),
      "yyyy-MM-dd"
    ),
    format(
      add(formattedDate, {
        days: 6,
      }),
      "yyyy-MM-dd"
    ),
    format(
      add(formattedDate, {
        days: 7,
      }),
      "yyyy-MM-dd"
    ),
  ];
};
