export const personalModule = (() => {
  const loadContainer = () => {
    const mainSection = document.querySelector(".main-section");
    const personalContainer = document.createElement("div");
    personalContainer.classList.add("personalContainer");
    mainSection.appendChild(personalContainer);
  };
  return { loadContainer };
})();
