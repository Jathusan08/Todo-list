export const createHealthContainer = () => {
  const mainSection = document.querySelector(".main-section");

  const healthContainer = document.createElement("div");
  healthContainer.classList.add("healthContainer");
  mainSection.appendChild(healthContainer);
};
