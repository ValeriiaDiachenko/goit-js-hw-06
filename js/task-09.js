function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const bntEl = document.querySelector('.change-color');
const infColorEl = document.querySelector('.color');


bntEl.addEventListener('click', onChangeColor);
function onChangeColor() {
  const randomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHexColor;
  infColorEl.textContent = randomHexColor;
}
