export const createTodayContainer = () => {
  const mainSection = document.querySelector(".main-section");

  const todayContainer = document.createElement("div");
  todayContainer.classList.add("todayContainer");
  mainSection.appendChild(todayContainer);
};
