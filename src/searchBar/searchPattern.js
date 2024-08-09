export const priorityMatchPattern = (matchPattern, taskPriority) => {
  return matchPattern.test(taskPriority);
};

export const titleMatchPattern = (matchPattern, taskTitle) => {
  return matchPattern.test(taskTitle);
};
