export const workModule = (() => {
  const loadContainer = () => {
    const mainSection = document.querySelector(".main-section");
    const workContainer = document.createElement("div");
    workContainer.classList.add("workContainer");
    mainSection.appendChild(workContainer);
  };
  return { loadContainer };
})();
