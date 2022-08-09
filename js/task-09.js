function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const btn = document.querySelector(".change-color")
const colorName = document.querySelector(".color")

btn.addEventListener("click", onChangeBgColor)

function onChangeBgColor() {
  const randomColor = getRandomHexColor();
  colorName.textContent = `${randomColor}`
  body.style.backgroundColor = randomColor
 }


