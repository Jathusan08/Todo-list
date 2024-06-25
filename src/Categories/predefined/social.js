export const socialModule = (() => {
  const loadContainer = () => {
    const mainSection = document.querySelector(".main-section");
    const socialContainer = document.createElement("div");
    socialContainer.classList.add("socialContainer");
    mainSection.appendChild(socialContainer);
  };
  return { loadContainer };
})();
