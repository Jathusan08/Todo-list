export const eventModule = (() => {
  const loadContainer = () => {
    const mainSection = document.querySelector(".main-section");
    const eventContainer = document.createElement("div");
    eventContainer.classList.add("eventContainer");
    mainSection.appendChild(eventContainer);
  };
  return { loadContainer };
})();
