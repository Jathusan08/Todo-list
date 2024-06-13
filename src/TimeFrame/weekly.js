export const createWeeklyContainer = () => {
  const mainSection = document.querySelector(".main-section");

  const weeklyContainer = document.createElement("div");
  weeklyContainer.classList.add("weeklyContainer");
  mainSection.appendChild(weeklyContainer);
};
