// Function for adding a class, has two parameters, the class given for allocating the components and the class to add. 
export function changeClasses(actualClass, newClass = "") {
  const elements = document.querySelectorAll(`.${actualClass}`);
  elements.forEach((element) => {
    element.className = `${actualClass} ${newClass}`;
  });
}
// Function to change the text for an element class given.
export function changeText(actualClass, text) {
  const element = document.querySelector(`.${actualClass}`);
  element.innerText = `${text}`;
}