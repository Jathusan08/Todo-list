export const travelModule = (() => {
  const loadContainer = () => {
    const mainSection = document.querySelector(".main-section");
    const travelContainer = document.createElement("div");
    travelContainer.classList.add("travelContainer");
    mainSection.appendChild(travelContainer);
  };
  return { loadContainer };
})();
