export const createTravelContainer = () => {
  const mainSection = document.querySelector(".main-section");

  const travelContainer = document.createElement("div");
  travelContainer.classList.add("travelContainer");
  mainSection.appendChild(travelContainer);
};
