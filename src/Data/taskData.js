import { personalModule } from "../Categories/predefinedCategories.js";
import { homeModule } from "../Categories/predefinedCategories.js";
import { learningModule } from "../Categories/predefinedCategories.js";
import { healthModule } from "../Categories/predefinedCategories.js";
import { workModule } from "../Categories/predefinedCategories.js";
import { eventModule } from "../Categories/predefinedCategories.js";
import { projectManagementModule } from "../Categories/predefinedCategories.js";
import { shoppingModule } from "../Categories/predefinedCategories.js";
import { financeModule } from "../Categories/predefinedCategories.js";
import { socialModule } from "../Categories/predefinedCategories.js";
import { travelModule } from "../Categories/predefinedCategories.js";

import { isTodayDate } from "../Utils/dateUtil.js";

export const getAllTaskData = () => {
  const allData = [];

  for (let i = 0; i < personalModule.getData().length; i++) {
    allData.push({
      projectName: "Personal",
      taskData: personalModule.getData()[i],
    });
  }

  for (let i = 0; i < homeModule.getData().length; i++) {
    allData.push({
      projectName: "Home",
      taskData: homeModule.getData()[i],
    });
  }

  for (let i = 0; i < learningModule.getData().length; i++) {
    allData.push({
      projectName: "Learning",
      taskData: learningModule.getData()[i],
    });
  }

  for (let i = 0; i < healthModule.getData().length; i++) {
    allData.push({
      projectName: "Health",
      taskData: healthModule.getData()[i],
    });
  }

  for (let i = 0; i < workModule.getData().length; i++) {
    allData.push({
      projectName: "Work",
      taskData: workModule.getData()[i],
    });
  }

  for (let i = 0; i < eventModule.getData().length; i++) {
    allData.push({
      projectName: "Event",
      taskData: eventModule.getData()[i],
    });
  }

  for (let i = 0; i < projectManagementModule.getData().length; i++) {
    allData.push({
      projectName: "Project Management",
      taskData: projectManagementModule.getData()[i],
    });
  }

  for (let i = 0; i < shoppingModule.getData().length; i++) {
    allData.push({
      projectName: "Shopping",
      taskData: shoppingModule.getData()[i],
    });
  }

  for (let i = 0; i < financeModule.getData().length; i++) {
    allData.push({
      projectName: "Finance",
      taskData: financeModule.getData()[i],
    });
  }

  for (let i = 0; i < socialModule.getData().length; i++) {
    allData.push({
      projectName: "Social",
      taskData: socialModule.getData()[i],
    });
  }

  for (let i = 0; i < travelModule.getData().length; i++) {
    allData.push({
      projectName: "Travel",
      taskData: travelModule.getData()[i],
    });
  }

  return allData;
};

export const getTodayTaskData = () => {
  const todayData = [];

  getAllTaskData().forEach((project) => {
    if (isTodayDate(project.taskData.dueDate)) {
      todayData.push(project);
    }
  });

  return todayData;
};
