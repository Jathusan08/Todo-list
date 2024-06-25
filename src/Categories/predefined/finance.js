export const financeModule = (() => {
  const loadContainer = () => {
    const mainSection = document.querySelector(".main-section");
    const financeContainer = document.createElement("div");
    financeContainer.classList.add("financeContainer");
    mainSection.appendChild(financeContainer);
  };
  return { loadContainer };
})();
