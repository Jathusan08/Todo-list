export const createWorkContainer = () => {
  const mainSection = document.querySelector(".main-section");

  const workContainer = document.createElement("div");
  workContainer.classList.add("workContainer");
  mainSection.appendChild(workContainer);
};
