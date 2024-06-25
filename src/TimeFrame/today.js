export const todayModule = (() => {
  const loadContainer = () => {
    const mainSection = document.querySelector(".main-section");
    const todayContainer = document.createElement("div");
    todayContainer.classList.add("todayContainer");
    mainSection.appendChild(todayContainer);
  };
  return { loadContainer };
})();
