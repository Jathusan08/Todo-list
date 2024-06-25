export const homeModule = (() => {
  const loadContainer = () => {
    const mainSection = document.querySelector(".main-section");
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("homeContainer");
    mainSection.appendChild(homeContainer);
  };
  return { loadContainer };
})();
