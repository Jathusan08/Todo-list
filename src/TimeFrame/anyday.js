export const anydayModule = (() => {
  const loadContainer = () => {
    const mainSection = document.querySelector(".main-section");
    const anyDayContainer = document.createElement("div");
    anyDayContainer.classList.add("anyDayContainer");
    mainSection.appendChild(anyDayContainer);
  };
  return { loadContainer };
})();
