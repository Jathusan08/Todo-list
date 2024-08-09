import { createModule } from "../Utils/moduleUtils.js";
import {
  generateContainer,
  displayTasktoGridLayout,
  removeTaskGrids,
} from "../Utils/tabUtil.js";
import {
  getAllTaskData,
  getTodayTaskData,
  getWeeklyTaskData,
} from "../Data/taskData.js";
import { searchModule } from "../searchBar/ searchBar.js";
import {
  priorityMatchPattern,
  titleMatchPattern,
} from "../searchBar/searchPattern.js";

import { toggleElementVisibility } from "../Utils/domUtil.js";

export const anydayModule = createModule("anyDayContainer", []);

anydayModule.loadContainer = () => {
  generateContainer("anyDayContainer");
  toggleElementVisibility(".controlPanel-Layout", "flex");
  toggleElementVisibility(".addTask-btn", "none"); // hiding the add button for timeframe tabs
  toggleElementVisibility(".dateASEC-btn", "block");
  toggleElementVisibility(".dateDESC-btn", "block");

  searchModule.clearSearchBar();

  anydayModule.loadData();
};

anydayModule.getData = () => getAllTaskData();

anydayModule.loadData = () => {
  anydayModule.getData().forEach((project) => {
    displayTasktoGridLayout(project.taskData, project.projectName);
  });
};

anydayModule.searchTask = (task) => {
  removeTaskGrids();

  const customPattern = task; // Set your custom pattern here
  const matchPattern = new RegExp(customPattern, "i"); //giving pattern that we want to match

  anydayModule.getData().forEach((task) => {
    if (
      priorityMatchPattern(matchPattern, task.taskData.priority) ||
      titleMatchPattern(matchPattern, task.taskData.title)
    ) {
      displayTasktoGridLayout(task.taskData, task.projectName);
    }
  });
};

anydayModule.sortByCompletionTaskStatus = (completionStatus) => {
  removeTaskGrids();

  anydayModule.getData().forEach((task) => {
    if (completionStatus) {
      if (task.taskData.completedStatus === true) {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    } else if (!completionStatus) {
      if (task.taskData.completedStatus === false) {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    }
  });
};

anydayModule.sortByPriority = (taskPriority) => {
  removeTaskGrids();
  anydayModule.getData().forEach((task) => {
    if (taskPriority === "High") {
      if (task.taskData.priority === "High") {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    } else if (taskPriority === "Low") {
      if (task.taskData.priority === "Low") {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    } else if (taskPriority === "Medium") {
      if (task.taskData.priority === "Medium") {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    }
  });
};

anydayModule.sortByTitleTask = (sortedOrder) => {
  removeTaskGrids();

  const copyData = [...anydayModule.getData()];

  copyData.sort((task1, task2) => {
    // If both elements are numbers or both are strings, perform normal comparison
    if (
      (typeof task1.taskData.title === "number" &&
        typeof task2.taskData.title === "number") ||
      (typeof task1.taskData.title === "string" &&
        typeof task2.taskData.title === "string")
    ) {
      return task1.taskData.title < task2.taskData.title
        ? -1
        : task1.taskData.title > task2.taskData.title
        ? 1
        : 0;
    }
    // If a is a number and b is a string, prioritise a (numbers before strings)
    if (
      typeof task1.taskData.title === "number" &&
      typeof task2.taskData.title === "string"
    ) {
      return -1;
    }
    // If a is a string and b is a number, prioritise b (numbers before strings)
    if (
      typeof task1.taskData.title === "string" &&
      typeof task2.taskData.title === "number"
    ) {
      return 1;
    }
  });

  if (sortedOrder === "ASEC") {
    copyData.forEach((task) =>
      displayTasktoGridLayout(task.taskData, task.projectName)
    );
  } else if (sortedOrder === "DESC") {
    copyData.reverse();
    copyData.forEach((task) =>
      displayTasktoGridLayout(task.taskData, task.projectName)
    );
  }
};

anydayModule.sortByDate = (sortedOrder) => {
  removeTaskGrids();

  const copyData = [...anydayModule.getData()];

  copyData.sort(
    (task1, task2) =>
      new Date(task1.taskData.dueDate) - new Date(task2.taskData.dueDate)
  );

  if (sortedOrder === "ASEC") {
    copyData.forEach((task) =>
      displayTasktoGridLayout(task.taskData, task.projectName)
    );
  } else if (sortedOrder === "DESC") {
    copyData.reverse();
    copyData.forEach((task) =>
      displayTasktoGridLayout(task.taskData, task.projectName)
    );
  }
};

anydayModule.sortByInsertionOrder = () => {
  removeTaskGrids();

  anydayModule.getData().forEach((task) => {
    displayTasktoGridLayout(task.taskData, task.projectName);
  });
};

anydayModule.addTask = (newTask) => {}; // Not allowing user to add task
anydayModule.updateTask = (task, index) => {}; // Not allowing user to update task
anydayModule.deleteTask = (index) => {}; // Not allowing user to delete task

export const todayModule = createModule("todayContainer", []);

todayModule.loadContainer = () => {
  generateContainer("todayContainer");
  toggleElementVisibility(".controlPanel-Layout", "flex");
  toggleElementVisibility(".addTask-btn", "none"); // hiding the add button for timeframe tabs
  toggleElementVisibility(".dateASEC-btn", "none"); // hiding the dateASEC-btn button for timeframe tabs as is today
  toggleElementVisibility(".dateDESC-btn", "none"); // hiding the dateDESC-btn button for timeframe tabs as is today

  searchModule.clearSearchBar();

  todayModule.loadData();
};

todayModule.getData = () => getTodayTaskData();

todayModule.loadData = () => {
  if (todayModule.getData().length > 0) {
    todayModule.getData().forEach((project) => {
      displayTasktoGridLayout(project.taskData, project.projectName);
    });
  }
};

todayModule.searchTask = (task) => {
  removeTaskGrids();

  const customPattern = task; // Set your custom pattern here
  const matchPattern = new RegExp(customPattern, "i"); //giving pattern that we want to match

  todayModule.getData().forEach((task) => {
    if (
      priorityMatchPattern(matchPattern, task.taskData) ||
      titleMatchPattern(matchPattern, task.taskData)
    ) {
      displayTasktoGridLayout(task.taskData, task.projectName);
    }
  });
};

todayModule.sortByCompletionTaskStatus = (completionStatus) => {
  removeTaskGrids();

  todayModule.getData().forEach((task) => {
    if (completionStatus) {
      if (task.taskData.completedStatus === true) {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    } else if (!completionStatus) {
      if (task.taskData.completedStatus === false) {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    }
  });
};

todayModule.sortByPriority = (taskPriority) => {
  removeTaskGrids();
  todayModule.getData().forEach((task) => {
    if (taskPriority === "High") {
      if (task.taskData.priority === "High") {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    } else if (taskPriority === "Low") {
      if (task.taskData.priority === "Low") {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    } else if (taskPriority === "Medium") {
      if (task.taskData.priority === "Medium") {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    }
  });
};

todayModule.sortByTitleTask = (sortedOrder) => {
  removeTaskGrids();

  const copyData = [...todayModule.getData()];

  copyData.sort((task1, task2) => {
    // If both elements are numbers or both are strings, perform normal comparison
    if (
      (typeof task1.taskData.title === "number" &&
        typeof task2.taskData.title === "number") ||
      (typeof task1.taskData.title === "string" &&
        typeof task2.taskData.title === "string")
    ) {
      return task1.taskData.title < task2.taskData.title
        ? -1
        : task1.taskData.title > task2.taskData.title
        ? 1
        : 0;
    }
    // If a is a number and b is a string, prioritise a (numbers before strings)
    if (
      typeof task1.taskData.title === "number" &&
      typeof task2.taskData.title === "string"
    ) {
      return -1;
    }
    // If a is a string and b is a number, prioritise b (numbers before strings)
    if (
      typeof task1.taskData.title === "string" &&
      typeof task2.taskData.title === "number"
    ) {
      return 1;
    }
  });

  if (sortedOrder === "ASEC") {
    copyData.forEach((task) =>
      displayTasktoGridLayout(task.taskData, task.projectName)
    );
  } else if (sortedOrder === "DESC") {
    copyData.reverse();
    copyData.forEach((task) =>
      displayTasktoGridLayout(task.taskData, task.projectName)
    );
  }
};

todayModule.sortByInsertionOrder = () => {
  removeTaskGrids();

  todayModule.getData().forEach((task) => {
    displayTasktoGridLayout(task.taskData, task.projectName);
  });
};

todayModule.addTask = (newTask) => {}; // Not allowing user to add task
todayModule.updateTask = (task, index) => {}; // Not allowing user to update task
todayModule.deleteTask = (index) => {}; // Not allowing user to delete task
todayModule.sortByDate = (sortedOrder) => {}; // Not allowing user to sort task as there is no point as it will be today date

export const weeklyModule = createModule("weeklyContainer", []);

//Overriding methods
weeklyModule.loadContainer = () => {
  generateContainer("weeklyContainer");
  toggleElementVisibility(".addTask-btn", "none"); // hiding the add button for timeframe tabs
  searchModule.clearSearchBar();

  weeklyModule.loadData();
};

weeklyModule.getData = () => getWeeklyTaskData();

weeklyModule.loadData = () => {
  if (weeklyModule.getData().length > 0) {
    weeklyModule.getData().forEach((project) => {
      displayTasktoGridLayout(project.taskData, project.projectName);
    });
  }
};

weeklyModule.searchTask = (task) => {
  removeTaskGrids();

  const customPattern = task; // Set your custom pattern here
  const matchPattern = new RegExp(customPattern, "i"); //giving pattern that we want to match

  weeklyModule.getData().forEach((task) => {
    if (
      priorityMatchPattern(matchPattern, task.taskData) ||
      titleMatchPattern(matchPattern, task.taskData)
    ) {
      displayTasktoGridLayout(task.taskData, task.projectName);
    }
  });
};

weeklyModule.sortByCompletionTaskStatus = (completionStatus) => {
  removeTaskGrids();

  weeklyModule.getData().forEach((task) => {
    if (completionStatus) {
      if (task.taskData.completedStatus === true) {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    } else if (!completionStatus) {
      if (task.taskData.completedStatus === false) {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    }
  });
};

weeklyModule.sortByPriority = (taskPriority) => {
  removeTaskGrids();
  weeklyModule.getData().forEach((task) => {
    if (taskPriority === "High") {
      if (task.taskData.priority === "High") {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    } else if (taskPriority === "Low") {
      if (task.taskData.priority === "Low") {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    } else if (taskPriority === "Medium") {
      if (task.taskData.priority === "Medium") {
        displayTasktoGridLayout(task.taskData, task.projectName);
      }
    }
  });
};

weeklyModule.sortByTitleTask = (sortedOrder) => {
  removeTaskGrids();

  const copyData = [...weeklyModule.getData()];

  copyData.sort((task1, task2) => {
    // If both elements are numbers or both are strings, perform normal comparison
    if (
      (typeof task1.taskData.title === "number" &&
        typeof task2.taskData.title === "number") ||
      (typeof task1.taskData.title === "string" &&
        typeof task2.taskData.title === "string")
    ) {
      return task1.taskData.title < task2.taskData.title
        ? -1
        : task1.taskData.title > task2.taskData.title
        ? 1
        : 0;
    }
    // If a is a number and b is a string, prioritise a (numbers before strings)
    if (
      typeof task1.taskData.title === "number" &&
      typeof task2.taskData.title === "string"
    ) {
      return -1;
    }
    // If a is a string and b is a number, prioritise b (numbers before strings)
    if (
      typeof task1.taskData.title === "string" &&
      typeof task2.taskData.title === "number"
    ) {
      return 1;
    }
  });

  if (sortedOrder === "ASEC") {
    copyData.forEach((task) =>
      displayTasktoGridLayout(task.taskData, task.projectName)
    );
  } else if (sortedOrder === "DESC") {
    copyData.reverse();
    copyData.forEach((task) =>
      displayTasktoGridLayout(task.taskData, task.projectName)
    );
  }
};

weeklyModule.sortByDate = (sortedOrder) => {
  removeTaskGrids();

  const copyData = [...weeklyModule.getData()];

  copyData.sort(
    (task1, task2) =>
      new Date(task1.taskData.dueDate) - new Date(task2.taskData.dueDate)
  );

  if (sortedOrder === "ASEC") {
    copyData.forEach((task) =>
      displayTasktoGridLayout(task.taskData, task.projectName)
    );
  } else if (sortedOrder === "DESC") {
    copyData.reverse();
    copyData.forEach((task) =>
      displayTasktoGridLayout(task.taskData, task.projectName)
    );
  }
};

weeklyModule.sortByInsertionOrder = () => {
  removeTaskGrids();

  weeklyModule.getData().forEach((task) => {
    displayTasktoGridLayout(task.taskData, task.projectName);
  });
};

weeklyModule.addTask = (newTask) => {}; // Not allowing user to add task
weeklyModule.updateTask = (task, index) => {}; // Not allowing user to update task
weeklyModule.deleteTask = (index) => {}; // Not allowing user to delete task
