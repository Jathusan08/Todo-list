export const createShoppingContainer = () => {
  const mainSection = document.querySelector(".main-section");

  const shoppingContainer = document.createElement("div");
  shoppingContainer.classList.add("shoppingContainer");
  mainSection.appendChild(shoppingContainer);
};
