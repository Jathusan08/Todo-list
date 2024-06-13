export const createSocialContainer = () => {
  const mainSection = document.querySelector(".main-section");

  const socialContainer = document.createElement("div");
  socialContainer.classList.add("socialContainer");
  mainSection.appendChild(socialContainer);
};
