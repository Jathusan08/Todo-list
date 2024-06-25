export const projectManagementModule = (() => {
  const loadContainer = () => {
    const mainSection = document.querySelector(".main-section");
    const projectManagementContainer = document.createElement("div");
    projectManagementContainer.classList.add("projectManagementContainer");
    mainSection.appendChild(projectManagementContainer);
  };
  return { loadContainer };
})();
