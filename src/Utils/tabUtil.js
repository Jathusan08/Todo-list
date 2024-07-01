export const generateContainer = (containerName) => {
  const mainSection = document.querySelector(".main-section");
  const newContainer = document.createElement("div");
  newContainer.classList.add(containerName);
  mainSection.appendChild(newContainer);
};
