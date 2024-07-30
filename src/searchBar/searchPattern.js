export const priorityMatchPattern = (matchPattern, task) => {
  return matchPattern.test(task.priority);
};

export const titleMatchPattern = (matchPattern, task) => {
  return matchPattern.test(task.title);
};
