export function changeClasses(actualClass, newClass = "") {
  const elements = document.querySelectorAll(`.${actualClass}`);
  console.log(elements);
  elements.forEach((element) => {
    element.className = `${actualClass} ${newClass}`;
  });
}

export function changeText(actualClass, text) {
  const element = document.querySelector(`.${actualClass}`);
  element.innerText = `${text}`;
}