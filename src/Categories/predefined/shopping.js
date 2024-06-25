export const shoppingModule = (() => {
  const loadContainer = () => {
    const mainSection = document.querySelector(".main-section");
    const shoppingContainer = document.createElement("div");
    shoppingContainer.classList.add("shoppingContainer");
    mainSection.appendChild(shoppingContainer);
  };
  return { loadContainer };
})();
