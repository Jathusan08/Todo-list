import { createModule } from "../Utils/moduleUtils.js";
import { generateContainer, addTaskToGridLayout } from "../Utils/tabUtil.js";

export const anydayModule = createModule("anyDayContainer", []);

export const todayModule = createModule("todayContainer", []);

// todayModule.loadContainer = () => {
//   generateContainer("todayContainer");
// };

export const weeklyModule = createModule("weeklyContainer", [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
]);

weeklyModule.loadContainer = () => {
  generateContainer("weeklyContainer");
  weeklyModule.getData()[0].push("test");
  console.log(weeklyModule.getData());
  console.log(`log overide`);
};

weeklyModule.addTask = (task) => {};
