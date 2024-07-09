export const getClassName = (element, index) => {
  const firstChild = element.children[index];
  return firstChild.className;
};

export const removeContent = (element, index) => {
  const childToRemove = element.children[index];
  element.removeChild(childToRemove);
};

export const hideElement = (element, option) => {
  element.setAttribute("style", `display: ${option};`);
};

export const addNewElement = (elementType, className) => {
  const newElement = document.createElement(elementType);
  newElement.classList.add(className);
  return newElement;
};
