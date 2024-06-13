export const createEventContainer = () => {
  const mainSection = document.querySelector(".main-section");

  const eventContainer = document.createElement("div");
  eventContainer.classList.add("eventContainer");
  mainSection.appendChild(eventContainer);
};
