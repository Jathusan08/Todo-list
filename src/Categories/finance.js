export const createFinanceContainer = () => {
  const mainSection = document.querySelector(".main-section");

  const financeContainer = document.createElement("div");
  financeContainer.classList.add("financeContainer");
  mainSection.appendChild(financeContainer);
};
