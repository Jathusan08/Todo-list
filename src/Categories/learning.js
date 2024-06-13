export const createLearningContainer = () => {
  const mainSection = document.querySelector(".main-section");

  const learningContainer = document.createElement("div");
  learningContainer.classList.add("learningContainer");
  mainSection.appendChild(learningContainer);
};
